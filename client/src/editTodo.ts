import { editCheckedTodo, editTodo } from "./apis/apis";

// 체크박스, 내용 정보 수정되면 둘 다 전송
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('ri-edit-2-line')) {
    const targetTodo = target.closest('.todo-item');

    if (targetTodo) {
      const id = targetTodo.id;
      const deleteButton = targetTodo.querySelector('.ri-delete-bin-5-line') as HTMLButtonElement;
      const targetInput = targetTodo.querySelector('.todo-text') as HTMLInputElement;
      const editButton = targetTodo.querySelector('.ri-edit-2-line') as HTMLButtonElement;
      const checkbox = targetTodo.querySelector('.todo-check') as HTMLInputElement;
  
      // 수정 완료 버튼 생성
      const finishButton = document.createElement('button');
      finishButton.setAttribute('class', 'finish-button');
      
      const finishButtonIcon = document.createElement('i');
      finishButtonIcon.setAttribute('class', 'ri-checkbox-circle-fill');

      finishButton.appendChild(finishButtonIcon);
      
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
        targetInput.readOnly = true;
        editTodo(id, checkbox.checked, targetInput.value);
      })
    }
  }
})

// 체크박스 수정 여부만 db에 반영되도록 
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('todo-check')) {
    const targetTodo = target.closest('.todo-item');

    if (targetTodo) {
      const id = targetTodo.id;
      const checkBox = targetTodo.querySelector('.todo-check') as HTMLInputElement;
      const checkedValue = checkBox.checked;
      
      editCheckedTodo(id, checkedValue);
    }
  }
}) 