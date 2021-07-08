const newFormHandler = async (event) => {
    event.preventDefault();
  
    const ingredientName = document.querySelector('#ingredient-name').value.trim();
  
    if (ingredientName) {
      const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({ ingredientName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
};
  
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });
    }
};
  
document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
  
document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);