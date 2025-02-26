const todoText = document.querySelector<HTMLInputElement>('#todo-text');
const editButton = document.querySelector<HTMLButtonElement>('#edit-button');

export const editTodo = (baseText: string) => {
  if (todoText?.value && editButton) {
    editButton.style.display = 'none';

    todoText.readOnly = false;
    todoText.value = baseText;
  }
}