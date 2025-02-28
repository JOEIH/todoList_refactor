import { deleteTodo } from "./apis/apis";

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const targetTodo = target.closest('.todo-item');

  if (targetTodo) {
    let answer = confirm('정말 삭제하시겠습니까?');

    if (answer) {
      deleteTodo(targetTodo.id);
    } 
  }
});