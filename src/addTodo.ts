const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector<HTMLInputElement>('#add-todo');
let todoBox = document.querySelector<HTMLDivElement>('#todos');

const addNewTodo = () => {
  if (todoInput && todoInput.value !== '') {
    // 투두 하나의 컨테이너 생성
    const newTodoContainer = document.createElement('label');
    newTodoContainer.className = 'todo-item'

    // 체크박스 생성
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.setAttribute('id', 'todo-check')

    // 커스텀 체크박스용 span 생성
    const customCheckbox = document.createElement('span');
    customCheckbox.setAttribute('id', 'checkbox-icon');

    // 텍스트 들어갈 span 생성
    const newTodoText = document.createElement('span');
    newTodoText.setAttribute('id', 'todo-text')
    newTodoText.textContent += todoInput.value;

    // 투두 컨테이너 안에 체크박스, 텍스트 div 추가
    newTodoContainer.appendChild(todoCheckbox);
    newTodoContainer.appendChild(customCheckbox);
    newTodoContainer.appendChild(newTodoText);

    // 투두리스트들을 div에 추가
    todoBox?.appendChild(newTodoContainer);
    todoInput.value = '';
  }
}

todoForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTodo();
})