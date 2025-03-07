const Todo = require('./models/todo');
const ObjectId = require('mongodb').ObjectId;

// 투두 전체 조회
const readTodos = async () => {
  try {
    //모든 할 일 조회
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    console.error('조회 오류: ', err);
    throw err
  }
}

// 투두 생성
const createTodo = async (todoData) => {
  try {
    const newTodo = new Todo(todoData);
    const savedTodo = await newTodo.save();
    return savedTodo;
  } catch (err) {
    console.error('할 일 생성 실패: ', err);
    throw err;
  }
}

// 단일 삭제
const deleteTodo = async (todoId) => {
  try {
    if (!ObjectId.isValid(todoId)) {
      throw new Error("유효하지 않은 ID 형식입니다.");
    }

    // 해당하는 id의 투두만 삭제(단일삭제)
    const deletedTodo = await Todo.findOneAndDelete({_id: new ObjectId(`${todoId}`)});
    return deletedTodo;
  } catch (err) {
    console.error('할 일 삭제 실패: ', err);
    throw err;
  }
}

// 투두 수정
const editTodo = async (todoId, editedData) => {
  try {
    console.log(editedData)
    const { isDone, content } = editedData;
    const originData = await Todo.findOne({_id: new ObjectId(`${todoId}`)});

    if (!originData) return null;

    const updatedData = await Todo.findByIdAndUpdate(todoId, {
      isDone: isDone,
      content: content
    });

    return updatedData;
  } catch (err) {
    console.error('할 일 수정 실패: ', err);
    throw err;
  }
}

module.exports = {readTodos, createTodo, deleteTodo, editTodo}