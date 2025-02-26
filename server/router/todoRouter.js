const express = require('express');
const {readTodos, createTodo, deleteTodo, editTodo} = require('../todoService');

const router = express.Router();

// 투두 조회
router.get("/", async (req, res) => {
  try {
    const allTodos = await readTodos();
    console.log(allTodos);

    res.json(allTodos);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

// 투두 생성
router.post("/", async (req, res) => {
  try {
    const todo = await createTodo(req.body);
    console.log(todo);

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

module.exports = router;