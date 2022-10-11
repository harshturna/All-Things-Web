// Remove items from the list

const groceryListParent = document.querySelector('#grocery-list ul');

groceryListParent.addEventListener('click', (e) => {
   
    if (e.target.className === 'delete'){
        e.target.parentElement.remove();
    }
});


// Add items to the list

const addItemForm = document.querySelector('#add-item');

addItemForm.addEventListener('submit',(e)=> {
    e.preventDefault();

    const inputText = addItemForm.querySelector('input[type="text"]').value;

    //clearing the entered text
    addItemForm.querySelector('input[type="text"]').value = null;


    if (!inputText) {
        return
    }

    const newItemLi = document.createElement('li');
    const newItemText = document.createElement('span');
    const newItemDelete = document.createElement('span');

    newItemText.textContent = inputText;
    newItemDelete.textContent = 'delete'

    newItemText.classList.add('item');
    newItemDelete.classList.add('delete');

    newItemLi.append(newItemText, newItemDelete);

    groceryListParent.append(newItemLi);
});

const searchForm = document.querySelector('#search-item');

// Preventing default behvaiour from the search form

searchForm.addEventListener('submit', (e) => {e.preventDefault();})



// Hide items 

const hideListCheckbox = document.querySelector('#hide');

hideListCheckbox.addEventListener('change', (e)=> {
    const groceryList = document.querySelector('#grocery-list');

    groceryList.style.display = hideListCheckbox.checked ? "none" : "block";
})


// Search items

const searchBox = document.forms['search-item'].querySelector('input');

searchBox.addEventListener('keyup', (e)=> {
    const text = e.target.value.toLowerCase();
    const groceryListUl = document.querySelector('#grocery-list ul');
    const items = groceryListUl.getElementsByTagName('li');
    const itemsArray = Array.from(items);

    itemsArray.forEach((item) => {
        let itemName = item.firstElementChild.textContent.toLowerCase();
        
        if(itemName.indexOf(text) == -1){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'block';
        }

    })

})