import express from "express";
import { dayModels } from "./dayModels.js";  

const router = express.Router();

class DaysDB {
    static _inst_;
    static getInst = () => {
        if (!DaysDB._inst_) DaysDB._inst_ = new DaysDB();
        return DaysDB._inst_;
    }

    constructor() { console.log("[Days-DB] DB Init Completed"); }

    readItems = async (dayNum) => {
        try {
            const res = await dayModels[dayNum].find().sort({ 'createdAt': -1 }).exec();
            return { success: true, data: res };
        } catch (e) {
            console.log(`[Days-DB] Read Error: ${e}`);
            return { success: false, data: `DB Error - ${e}` };
        }
    }

    updateItemDone = async (id, nextDone, dayNum) => {
        try {
            const res = await dayModels[dayNum].updateOne({ _id: id }, { done: nextDone })
            return true;
        } catch (e) {
            console.log(`[Days-DB] Edit Error: ${e}`);
            return { success: false, data: `DB Error - ${e}` };
        }

    }

    addItem = async (item, dayNum) => {
        const { done, content } = item;
        try {
            const newItem = new dayModels[dayNum]({ done, content });
            const res = await newItem.save();
            return true;
        } catch (e) {
            console.log(`[Days-DB] Insert Error: ${e}`);
            return false;
        }
    }

    deleteItem = async (id, dayNum) => {
        try {
            const ODeleteFiler = { _id: id };
            const res = await dayModels[dayNum].deleteOne(ODeleteFiler);
            return true;
        } catch (e) {
            console.log(`[Days-DB] Delete Error: ${e}`);
            return false;
        }
    }
}


const daysDBInst = DaysDB.getInst();

router.get(`/getDay/:dayNum`, async (req, res) => {
    console.log(`GET /getDay/${req.params.dayNum}`);
    try {
        const dayNum = parseInt(req.params.dayNum);
        const dbRes = await daysDBInst.readItems(dayNum);
        if (dbRes.success) {
            return res.status(200).json(dbRes.data);
        } else {
            return res.status(500).json({ error: dbRes.data });
        }
    } catch (e) {
        return res.status(500).json({ error: e });
    }
});


router.put('/updateItemDone/:dayNum', async (req, res) => {
    try {
        const dayNum = parseInt(req.params.dayNum);
        const id = req.body.id;
        const nextDone = req.body.nextDone;

        const dbRes = await daysDBInst.updateItemDone(id, nextDone, dayNum);
        if (dbRes) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ success: false, error: 'Failed to update item.' });
        }
    } catch (e) {
        return res.status(500).json({ success: false, error: e });
    }
});

router.post('/createItem/:dayNum', async (req, res) => {
    try {
        const dayNum = parseInt(req.params.dayNum);
        const { done, content } = req.body;

        const dbRes = await daysDBInst.addItem({ done, content }, dayNum);
        if (dbRes) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ success: false, error: 'Failed to create item.' });
        }
    } catch (e) {
        return res.status(500).json({ success: false, error: e });
    }
});

router.delete('/deleteItem/:dayNum/:id', async (req, res) => {
    try {
        const dayNum = parseInt(req.params.dayNum);
        const id = req.params.id;

        const dbRes = await daysDBInst.deleteItem(id, dayNum);
        if (dbRes) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ success: false, error: 'Failed to delete item.' });
        }
    } catch (e) {
        return res.status(500).json({ success: false, error: e });
    }
});

export default router;
