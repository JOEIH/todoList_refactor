import { getAllData } from "./apis/apis";

let todoBox = document.querySelector<HTMLDivElement>('#todos');
const blankMessage = document.getElementById('blank-message');

// 투두리스트 전체 조회
const todos = await getAllData();

todos.map((data) => {
  if (data) {
    // 투두가 있으면 기본 문구 삭제
    if (blankMessage) {  
      blankMessage.style.display = 'none';
    }
  
    const newTodoContainer = document.createElement('label');
    newTodoContainer.id = data._id.toString();
    newTodoContainer.className = 'todo-item'
  
    // 완료 여부에 따라 다르게 보여주기
    newTodoContainer.insertAdjacentHTML('afterbegin', 
      `<div class="checkbox-and-input">
        <input type="checkbox" class="todo-check" ${data.isDone ? 'checked' :''}>
        <span class="checkbox-icon"></span> 
        <input class="todo-text" value="${data.content}" readonly="true">
       </div>
       <div class="button-box">
        <button class="edit-button">수정</button>
        <button class="delete-button">삭제</button> 
       </div>
    `)
  
    todoBox?.appendChild(newTodoContainer);
  } 
})