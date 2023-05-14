const mongoose = require("mongoose");

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

const DayModel = mongoose.model("day", schema);

module.exports = DayModel;
