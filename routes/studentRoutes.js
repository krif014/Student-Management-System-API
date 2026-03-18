import express from "express";

import {
    createStudent,
    getStudent,
    getStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/",createStudent);
router.get("/",getStudent);
router.get("/:id",getStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

export default router;