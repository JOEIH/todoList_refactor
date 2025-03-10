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
    `<div class="checkbox-and-input">
      <input type="checkbox" class="todo-check">
      <span class="checkbox-icon"></span> 
      <input class="todo-text" value="${text}" readonly="true">
     </div>
     <div class="button-box">
      <button class="edit-button"><i class="ri-edit-2-line"></i></button>
      <button class="delete-button"><i class="ri-delete-bin-5-line"></i></button> 
     </div>
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
  //임시방편으로 일단 reload
  location.reload();
})