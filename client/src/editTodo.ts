const todoText = document.querySelector<HTMLInputElement>('#todo-text');
const deleteButton = document.querySelector<HTMLButtonElement>('#delete-button');

export const editTodo = (baseText: string) => {
  if (todoText?.value && deleteButton) {
    deleteButton.style.display = 'none';

    todoText.readOnly = false;
    todoText.value = baseText;
  }
}