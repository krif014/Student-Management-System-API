import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
age: Number,
course: String,

}, { timestamps: true });
export default mongoose.model("Student",studentSchema);