const express = require('express');
const {readTodos, createTodo, deleteTodo, editTodo} = require('../todoService');

const router = express.Router();

// 투두 조회
router.get("/", async (req, res) => {
  try {
    const allTodos = await readTodos();

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

// 투두 삭제
router.delete("/todo/:id", async (req, res) => {
  try {
    const target = await deleteTodo(req.params.id);

    if (target) {
      res.status(201).json(target);
    } else {
      res.status(404).json({message: '찾을 수 없는 항목입니다.'})
    }
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

module.exports = router;