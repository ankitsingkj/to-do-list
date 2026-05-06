import Todo from "../models/todo.modal.js";

// CREATE TODO
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // validation
    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};