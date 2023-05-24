import mongoose from "mongoose"; 

const OSchemaDefinition = {
    content: {
        type: String,
        default: "",
    },
    done: {
        type: Boolean,
        default: false,
    }
};

const OSchemaOptions = { timestamps: true };

const schema = new mongoose.Schema(OSchemaDefinition, OSchemaOptions);

const dayModels = []; // array of models

// Create 31 models and add them to the array
for (let i = 1; i <= 31; i++) {
    const modelName = `DayModel${i}`;
    const model = mongoose.model(modelName, schema);
    dayModels.push(model);
}

export { dayModels };