let rootNode = document.getElementById('root');

let contentNode = (function createList() {
    let content = document.createElement('section');
    content.setAttribute('class', 'main-container');

    let headerElements = document.createElement('div');
    headerElements.setAttribute('class', 'headerElements');

    let heading = document.createElement('h1');
    heading.innerHTML = 'TODO Cat List';
    headerElements.appendChild(heading);

    let inputBlock = document.createElement('div');
    inputBlock.setAttribute('class', 'header-input-block');

    let input = document.createElement('input');
    input.setAttribute('id', 'headerInputField');
    input.setAttribute('placeholder', 'Add New Action');

    inputBlock.appendChild(input);

    let addButton = document.createElement('i');
    addButton.setAttribute('class', 'material-icons');
    addButton.innerHTML = 'add_box';
    addButton.addEventListener('click', addListItem);
    inputBlock.appendChild(addButton);

    headerElements.appendChild(inputBlock);
    content.appendChild(headerElements);

    let listItemsBlock = document.createElement('div');
    listItemsBlock.setAttribute('class', 'listItemsBlock');
    let list = document.createElement('ul');
    listItemsBlock.appendChild(list);
    content.appendChild(listItemsBlock);

    let footerElements = document.createElement('div');
    footerElements.setAttribute('class', 'footerElements');
    let catImg = document.createElement('img');
    catImg.setAttribute('src', './assets/img/cat.png');
    footerElements.appendChild(catImg);

    content.appendChild(footerElements);

    let data = {
        allItems: []
    }

    class Item {
        constructor(id) {
            this.id = id;
        }
    }

    function addListItem() {
        const ZERO = 0;
        const ONE = 1;
        const listMaxItems = 10;
        let inputValue = document.getElementById('headerInputField').value;
        let message = document.createElement('p');
        message.setAttribute('class', 'message');
        if (data.allItems.length === listMaxItems) {

            addButton.style.display = 'none';
            if (document.getElementsByClassName('message').length === ZERO) {
                message.innerHTML = 'Maximum item per list are created';
                headerElements.appendChild(message);
            }

        } else {
            if (inputValue !== '') {
                let newItem, ID;
                if (data.allItems.length > ZERO) {
                    ID = data.allItems[data.allItems.length - ONE].id + ONE;
                } else {
                    ID = ZERO;
                }
                newItem = new Item(ID);
                data.allItems.push(newItem);

                const item = document.createElement('li');
                item.setAttribute('class', `items item-${ID}`);

                const itemsFirstBlock = document.createElement('div');
                const ico = document.createElement('i');
                const deleteIco = document.createElement('i');
                deleteIco.setAttribute('class', 'material-icons');
                deleteIco.innerHTML = 'delete';
                deleteIco.addEventListener('click', () => {
                    item.remove();
                    message.remove();
                    data.allItems.pop();
                    addButton.style.display = 'inline-block';
                    headerElements.removeChild(message);
                });

                ico.setAttribute('class', 'material-icons');
                ico.innerHTML = 'check_box_outline_blank';
                ico.addEventListener('click', () => {
                    ico.innerHTML = 'check_box';
                });
                itemsFirstBlock.appendChild(ico);
                let description = document.createElement('p');
                description.innerHTML = inputValue;
                itemsFirstBlock.appendChild(description);
                item.appendChild(itemsFirstBlock);
                item.appendChild(deleteIco);
                list.appendChild(item);
            }
        }
    }

    return content;
})();

rootNode.appendChild(contentNode);