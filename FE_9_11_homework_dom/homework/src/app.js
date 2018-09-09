let rootNode = document.getElementById('root');
let contentNode = (function () {

    let content = document.createElement('div');
    content.setAttribute('class', 'main-container');

    const page = {
        headerElements: document.createElement('div'),
        listItemsBlock: document.createElement('div'),
        footerElements: document.createElement('div')
    }

    const headerElements = {
        heading: document.createElement('h1'),
        inputBlock: document.createElement('div'),
        input: document.createElement('input'),
        addButton: document.createElement('button'),
        addBtnIco: document.createElement('i'),
        message: 'Maximum item per list are created'
    }

    const listBlock = {
        list: document.createElement('ul')
    }

    const footerElements = {
        catImg: document.createElement('img')
    }

    // Attributes for header elements
    page.headerElements.setAttribute('class', 'header-elements');
    headerElements.heading.innerHTML = 'TODO Cat List';
    page.headerElements.appendChild(headerElements.heading);
    headerElements.inputBlock.setAttribute('class', 'header-input-block');
    headerElements.input.setAttribute('id', 'headerInputField');
    headerElements.input.autofocus = true;
    headerElements.input.setAttribute('placeholder', 'Add New Action');
    headerElements.addButton.appendChild(headerElements.addBtnIco);
    headerElements.addButton.disabled = true;
    headerElements.inputBlock.appendChild(headerElements.input);
    headerElements.addBtnIco.setAttribute('class', 'material-icons');
    headerElements.addBtnIco.innerHTML = 'add_box';
    headerElements.addButton.addEventListener('click', addListItem);
    headerElements.inputBlock.appendChild(headerElements.addButton);
    page.headerElements.appendChild(headerElements.inputBlock);
    content.appendChild(page.headerElements);

    // Attributes for list block elements 
    listBlock.list.setAttribute('id', 'items');
    page.listItemsBlock.setAttribute('class', 'list-items-block');
    page.listItemsBlock.appendChild(listBlock.list);
    content.appendChild(page.listItemsBlock);

    // Attributes for footer elements
    page.footerElements.setAttribute('class', 'footer-elements');
    footerElements.catImg.setAttribute('src', './assets/img/cat.png');
    page.footerElements.appendChild(footerElements.catImg);
    content.appendChild(page.footerElements);
    let items = {
        allItems: [],
        ZERO: 0,
        ONE: 1,
        maxListItems: 10
    }

    headerElements.input.addEventListener('keyup', () => {
        if (headerElements.input.value.length === 0) {
            headerElements.addButton.disabled = true;
        } else {
            headerElements.addButton.disabled = false;
        }
    })

    // Dragging


    // Creating list item
    function addListItem() {
        let listComp = {
            inputField: document.getElementById('headerInputField'),
            inputValue: document.getElementById('headerInputField').value,
            item: document.createElement('li'),
            itemsFirstBlock: document.createElement('div'),
            ico: document.createElement('i'),
            deleteIco: document.createElement('i'),
            description: document.createElement('p')
        }
        if (items.allItems.length < items.maxListItems) {
            if (listComp.inputValue > '') {
                let newItem, ID;
                class Item {
                    constructor(ID, desc) {
                        this.ID = ID;
                        this.desc = desc;
                    }
                }
                items.allItems.length > items.ZERO ?
                    ID = items.allItems[items.allItems.length - items.ONE].ID + items.ONE :
                    ID = items.ZERO;
                newItem = new Item(ID, listComp.inputValue.trim());
                items.allItems.push(newItem);

                //Attributes for item elements
                listComp.item.setAttribute('class', `item item-${ID}`);
                listComp.item.setAttribute('draggable', 'true');
                listComp.deleteIco.setAttribute('class', 'material-icons');
                listComp.deleteIco.innerHTML = 'delete';
                listComp.deleteIco.addEventListener('click', () => {
                    if (document.querySelector('.message')) {
                        document.querySelector('.message').remove();
                    }
                    items.allItems.pop();
                    listComp.item.remove();
                    headerElements.addButton.disabled = false;
                });
                listComp.ico.setAttribute('class', 'material-icons');
                listComp.ico.innerHTML = 'check_box_outline_blank';
                listComp.ico.addEventListener('click', () => {
                    listComp.ico.innerHTML = 'check_box';
                });
                listComp.itemsFirstBlock.appendChild(listComp.ico);
                listComp.description.innerHTML = listComp.inputValue;
                listComp.itemsFirstBlock.appendChild(listComp.description);
                listComp.item.appendChild(listComp.itemsFirstBlock);
                listComp.item.appendChild(listComp.deleteIco);
                listBlock.list.appendChild(listComp.item);

                if (items.allItems.length >= items.maxListItems) {
                    if (document.getElementsByClassName('message').length === items.ZERO) {
                        let errorMessage = document.createElement('p');
                        errorMessage.setAttribute('class', 'message');
                        errorMessage.innerHTML = headerElements.message;
                        page.headerElements.appendChild(errorMessage);
                        headerElements.addButton.disabled = true;
                    }
                }
            }
        }
    }
    return content;
})();

rootNode.appendChild(contentNode);