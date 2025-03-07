import { deleteTodo } from "./apis/apis";

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('delete-button')) {
    const targetTodo = target.closest('.todo-item');

    if (targetTodo) {
      const id = targetTodo.id;
      let answer = confirm('정말 삭제하시겠습니까?');
  
      if (answer) {
        deleteTodo(id);
        //임시방편으로 일단 reload
        location.reload();
      } 
    }
  }
});