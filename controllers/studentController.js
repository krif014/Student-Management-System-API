import Student from "../models/Student.js";

//CREATE
export const createStudent = async (req,res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

//GET ALL
export const getStudents = async (req,res) => {
    const students = await Student.find();
    res.json(students);
};

//GET ONE
export const getStudent = async (req,res) => {
  try { 
    const student = await Student.findById(req.params.id);
    if(!student) {
    return res.status(404).json({ message:"Student not found" });
    }
    res.json(student);
} catch(error) {
    res.status(500).json({ message: error.message });
}
};
 
//UPDATE 
export const updateStudent = async (req,res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updateStudent);
   }catch (error) {
    res.status(500).json({ message: error.message });
   }
};

//DELETE
export const deleteStudent = async (req,res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message:"Deleted successfully"});
};