import express from "express";
import userModel from "./userModel.js";  

const router = express.Router();

class UserDB {
    static _inst_;
    static getInst = () => {
        if (!UserDB._inst_) UserDB._inst_ = new UserDB();
        return UserDB._inst_;
    }
    constructor() { console.log("[User-DB] DB Init Completed"); }

    signUp = async (username, password) => {
        try {
            const newUser = new userModel({ username, password });
            const res = await newUser.save();
            return { success: true, data: res };
        } catch (e) {
            console.log(`[User-DB] Insert Error: ${e}`);
            return { success: false, data: `DB Error - ${e}` };
        }
    }

    login = async (username, password) => {
        const res = await userModel.findOne({ username }).exec();
        if (res){
            const match = await bcrypt.compare(password, res.password);
            if (match){
                return { success: true, data: res };
            }else{
                return { success: false, data: "Invalid username or password" };
            }
        }
    }
}


const UserDBInst = UserDB.getInst();


router.get('/findID', async (req, res) => {
    const username = req.query.username;
    const user = await userModel.findOne({ username });
    if (!user){
        return res.json({ exists: false });
    }else{
        return res.json({ exists: true });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (user && password === user.password){
        console.log("welcome back! user logged in successfully");
        res.status(200).json({ message: 'User logged in successfully' });
    } else{
        res.status(400).json({ error: 'Invalid username or password' });
    }
});


router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const dbRes = await UserDBInst.signUp(username, password);
    if (dbRes.success) {
        res.status(201).json({ message: 'User registered successfully' });
    } else {
        res.status(500).json({ error: 'Failed to create user.' });
    }
});

export default router;