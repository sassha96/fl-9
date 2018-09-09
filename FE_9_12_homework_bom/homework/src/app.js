const rootNode = document.getElementById('root'),
    todoList = document.getElementById('todo-list'),
    doneList = document.getElementById('done-list'),
    openAddPageBtn = document.getElementById('add-new-task'),
    addTaskBtn = document.getElementById('save-add'),
    cancelAddTask = document.getElementById('cancel-add'),
    addModifyBtn = document.getElementById('save-modify'),
    cancelModify = document.getElementById('cancel-modify'),
    inputAdd = document.getElementById('add-task'),
    inputModify = document.getElementById('modify-task'),
    listSection = document.getElementById('todo-lists'),
    addSection = document.getElementById('add'),
    modifySection = document.getElementById('modify'),
    massege = document.getElementById('massege');

let todoItems = [],
    li = document.createElement('li'),
    checkBtn = document.createElement('img'),
    removeBtn = document.createElement('img'),
    span = document.createElement('span'),
    modifyID = null,
    modifyEl = null;

openAddPageBtn.addEventListener('click', function () {
    listSection.classList.remove('active');
    addSection.classList.add('active');
    location.hash = 'add';
})

addTaskBtn.addEventListener('click', function () {
    if (!isBlank(inputAdd.value)) {
        addTask();

        listSection.classList.add('active');
        addSection.classList.remove('active');
        history.pushState('', document.title, window.location.pathname);
    }
})

cancelAddTask.addEventListener('click', function () {
    listSection.classList.add('active');
    addSection.classList.remove('active');
    history.pushState('', document.title, window.location.pathname);
})

addModifyBtn.addEventListener('click', function () {
    if (!isBlank(inputModify.value)) {
        modifyItem(modifyID, inputModify.value);

        modifyEl.childNodes[1].textContent = inputModify.value;
        inputModify.value = '';
        listSection.classList.add('active');
        modifySection.classList.remove('active');
        history.pushState('', document.title, window.location.pathname);
    }
})

cancelModify.addEventListener('click', function () {
    inputModify.value = '';
    listSection.classList.add('active');
    modifySection.classList.remove('active');
    history.pushState('', document.title, window.location.pathname);
})

function addTask() {
    let newTask = new Task(inputAdd.value);
    todoItems.push(newTask);
    inputAdd.value = '';

    fillList(newTask.description, newTask.isDone, newTask.id);

    pushToStorage();
}

function fillList(description, isDone, id) {
    let li = document.createElement('li'),
        checkBtn = document.createElement('img'),
        removeBtn = document.createElement('img'),
        span = document.createElement('span'),
        taskId = id;

    span.textContent = description;
    span.addEventListener('click', function (e) {
        let taskDescription = span.textContent;

        modifyID = taskId;
        modifyEl = e.target.parentElement;

        inputModify.value = taskDescription;

        listSection.classList.remove('active');
        modifySection.classList.add('active');
        location.hash = `modify/${modifyID}`;
    })

    removeBtn.setAttribute('src', 'assets/img/remove-s.jpg');
    removeBtn.setAttribute('alt', 'remove');
    removeBtn.addEventListener('click', function (e) {
        let parentLi = e.target.parentElement,
            parentUl = e.target.parentElement.parentElement;

        parentUl.removeChild(parentLi);

        checkTodoLists();

        removeItem(taskId);

        pushToStorage();
    })

    if (isDone) {
        checkBtn.setAttribute('src', 'assets/img/done-s.png');
        checkBtn.setAttribute('alt', 'done');

        li.appendChild(checkBtn);
        li.appendChild(span);
        li.appendChild(removeBtn);

        doneList.appendChild(li);
    } else {
        checkBtn.setAttribute('src', 'assets/img/todo-s.png');
        checkBtn.setAttribute('alt', 'todo');
        checkBtn.addEventListener('click', function (e) {
            checkBtn.setAttribute('src', 'assets/img/done-s.png');
            checkBtn.setAttribute('alt', 'done');

            todoItems[taskId].isDone = true;

            pushToStorage();

            let parentLi = e.target.parentElement,
                parentUl = e.target.parentElement.parentElement;

            if (parentUl !== doneList) {
                parentUl.removeChild(parentLi);
                doneList.appendChild(parentLi);
            }
        })

        li.appendChild(checkBtn);
        li.appendChild(span);
        li.appendChild(removeBtn);

        todoList.appendChild(li);
    }

    checkTodoLists();
}

function removeItem(id) {
    if (todoItems.length === 1) {
        todoItems.pop();

        localStorage.removeItem('todoItems');
    } else {
        let tempArray = todoItems.splice(id);

        for (let i = 1; i < tempArray.length; i++) {
            tempArray[i].id = todoItems.length;

            todoItems.push(tempArray[i]);
        }
    }
}

function modifyItem(id, text) {
    todoItems[id].description = text;

    pushToStorage();
}

function pushToStorage() {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function getFromStorage() {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));

    for (let i = 0; i < todoItems.length; i++) {
        fillList(todoItems[i].description, todoItems[i].isDone, todoItems[i].id)
    }
}

function checkTodoLists() {
    let todoLength = todoList.childNodes.length,
        doneLength = doneList.childNodes.length;

    if (todoLength > 1 || doneLength > 1) {
        massege.style.display = 'none';
    } else {
        massege.style.display = 'block';
    }
}

function isBlank(blancString) {
    return !blancString || /^\s*$/.test(blancString);
}

function Task(text) {
    this.description = text;
    this.isDone = false;
    this.id = todoItems.length;
}

if (localStorage.getItem('todoItems')) {
    getFromStorage();
    checkTodoLists();
}