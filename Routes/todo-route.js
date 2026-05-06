import express from "express";
import { createTodo,getTodos } from "../controller/todo.controller.js";


const router = express.Router();

// Create Todo
router.post("/add", createTodo);

// Test Route  only for testing
// router.get("/", (req, res) => {
//   res.send("TODO API is running");
// });

router.get("/",getTodos)
export default router;