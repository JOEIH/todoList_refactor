const express = require('express');
const {readTodos, createTodo, deleteTodo, editTodo, checkedTodo} = require('../todoService');

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

//투두 수정(내용, 체크박스)
router.put("/todo/:id", async (req, res) => {
  try { 
    const target = await editTodo(req.params.id, req.body);

    if (target) {
      res.status(201).json(target);
    } else {
      res.status(404).json({message: '찾을 수 없는 항목입니다.'})
    }
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

// 투두 수정(체크박스만)
router.put("/todo/:id", async (req, res) => {
  try {
    const target = await checkedTodo(req.params.id, req.body);

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