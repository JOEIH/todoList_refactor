import axios from "axios";

const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector<HTMLInputElement>('#add-todo');
const blankMessage = document.getElementById('blank-message');
let todoBox = document.querySelector<HTMLDivElement>('#todos');

// 기본 투두 항목
const getExamples = async () => {
  const res = await axios.get("http://localhost:4000/");
  console.log(res.data);
}

getExamples();


const makeTodo = (text: string) => {
  // 투두 하나의 컨테이너 생성
  const newTodoContainer = document.createElement('label');
  newTodoContainer.className = 'todo-item'

  newTodoContainer.insertAdjacentHTML('afterbegin', 
    `<input type="checkbox" id="todo-check">
     <span id="checkbox-icon"></span> 
     <input id="todo-text" value="${text}" readonly="true">
     <button id="edit-button">수정</button>
     <button id="delete-button">삭제</button> 
    `)

  // 투두리스트들을 div에 추가
  todoBox?.appendChild(newTodoContainer);
}

const addNewTodo = () => {
  if (todoInput) {
    if (!todoInput.value.trim()) {
      alert('공백으로만 이루어진 항목은 입력할 수 없습니다.')
      todoInput.value = ''
    }

    if (todoInput.value.trim()) {
      // 기본 문구 삭제
      if (blankMessage) {  
        blankMessage.style.display = 'none';
      }

      makeTodo(todoInput.value);
      todoInput.value = '';
    }
  }
}

todoForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTodo();
})