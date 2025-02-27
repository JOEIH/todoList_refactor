import { getAllData } from "./apis/apis";

let todoBox = document.querySelector<HTMLDivElement>('#todos');
const blankMessage = document.getElementById('blank-message');

// 투두리스트 전체 조회
const todos = await getAllData();

todos.map((data) => {
  const newTodoContainer = document.createElement('label');
  newTodoContainer.className = 'todo-item'

  if (data) {
    // 투두가 있으면 기본 문구 삭제
    if (blankMessage) {  
      blankMessage.style.display = 'none';
    }

    // 완료 여부에 따라 다르게 보여주기
    newTodoContainer.insertAdjacentHTML('afterbegin', 
      `<input type="checkbox" id="todo-check" ${data.isDone ? 'checked' : ''}>
      <span id="checkbox-icon"></span> 
      <input id="todo-text" value="${data.content}" readonly="true">
      <button id="edit-button">수정</button>
      <button id="delete-button">삭제</button> 
    `)

    todoBox?.appendChild(newTodoContainer);
  } 
})