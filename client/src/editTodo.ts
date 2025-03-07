import { editTodo } from "./apis/apis";

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('edit-button')) {
    const targetTodo = target.closest('.todo-item');

    if (targetTodo) {
      const id = targetTodo.id;
      const deleteButton = targetTodo.querySelector('.delete-button') as HTMLButtonElement;
      const targetInput = targetTodo.querySelector('.todo-text') as HTMLInputElement;
      const editButton = targetTodo.querySelector('.edit-button') as HTMLButtonElement;
      const checkbox = targetTodo.querySelector('.todo-check') as HTMLInputElement;
  
      // 수정 완료 버튼 생성
      const finishButton = document.createElement('button');
      finishButton.setAttribute('class', 'finish-button');
      finishButton.textContent = "완료";
      
      // 수정 버튼 클릭 시 input focus와 완료 버튼 나타나도록 설정
      deleteButton.style.display = "none";
      editButton.style.display = "none";
      targetTodo.appendChild(finishButton);
      targetInput.readOnly = false;
      targetInput.focus();
  
      // 완료 버튼 누르면 수정 완료
      finishButton.addEventListener('click', () => {
        finishButton.style.display = "none";
        deleteButton.style.display = "inline-block";
        editButton.style.display = "inline-block";
        editTodo(id, checkbox.checked, targetInput.value);
      })
    }
  }
})