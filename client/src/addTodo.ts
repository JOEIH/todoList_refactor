import { addTodo } from "./apis/apis";

const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector<HTMLInputElement>('#add-todo');
const blankMessage = document.getElementById('blank-message');
let todoBox = document.querySelector<HTMLDivElement>('#todos');

const makeTodo = (text: string) => {
  // 투두 하나의 컨테이너 생성
  const newTodoContainer = document.createElement('label');
  newTodoContainer.className = 'todo-item'

  newTodoContainer.insertAdjacentHTML('afterbegin', 
    `<input type="checkbox" class="todo-check">
     <span class="checkbox-icon"></span> 
     <input class="todo-text" value="${text}" readonly="true">
     <button class="edit-button">수정</button>
     <button class="delete-button">삭제</button> 
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
      addTodo(todoInput.value);
      todoInput.value = '';
    }
  }
}

todoForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTodo();
})