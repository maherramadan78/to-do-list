import './style.css';
import { addNewTask } from '../modules/addItem.js';
import modifyTask from '../modules/editTask.js';
import { removeTask } from '../modules/deleteTask.js';
import removeCompleted from '../modules/clearCompleted.js';
import completeTask from '../modules/markTask.js';
import { displayListTasks } from '../modules/listCard.js';

import {

  updateLocalStorage,
  getLocalStorage as tasksList,
} from '../modules/data.js';

// Declare variables
const input = document.querySelector('.inputField');
const todoList = document.querySelector('.toDoContainer');
const addTaskBtn = document.querySelector('.insert-btn');

const clearCompletedBtn = document.querySelector('.clearbtn');

// ADD TASK EVENT LISTENER FOR CLICK EVENT

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addNewTask(tasksList(), input.value);
    input.value = '';
    updateLocalStorage(tasksList());
    displayListTasks(tasksList());
  }
});

// DELETE TASK

todoList.addEventListener('click', (event) => {
  if (event.target.closest('.trash-can')) {
    removeTask(event, tasksList());
=======
  addItem,
  removeItem,
  displayToDos,
  getDescriptionInput,
  markCompleted,
  clearMethod,
} from './CRUD.js';

const todoContainer = document.querySelector('.todos-container');
const addBtn = document.querySelector('.fa-plus');
const input = document.querySelector('.toDoName');
const locStorage = JSON.parse(localStorage.getItem('todos'));
const clearCompleted = document.querySelector('.clear-completed');

let arr;
if (locStorage == null) {
  arr = [];
} else {
  arr = locStorage;
}
window.addEventListener('load', () => {
  displayToDos(arr, todoContainer);
});

addBtn.addEventListener('click', () => {
  if (input.value === '' || input.value === null) {
    return null;
  }
  const todoContainer = document.querySelector('.todos-container');
  const inputVal = input.value;
  addItem(arr, inputVal);
  const locStorage = JSON.parse(localStorage.getItem('todos'));
  input.value = '';
  displayToDos(locStorage, todoContainer);
  return 'To Do Created';
});

todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'I' && e.target.classList.value === 'fas fa-trash-alt') {
    const {
      id,
    } = e.target;
    removeItem(id);
    const locStorage = JSON.parse(localStorage.getItem('todos'));
    displayToDos(locStorage, todoContainer);
  } else if (e.target.tagName === 'INPUT' && e.target.type !== 'checkbox') {
    e.target.readOnly = false;
    const {
      id,
    } = e.target;
    const arr = JSON.parse(localStorage.getItem('todos'));
    getDescriptionInput(e.target, arr, id);
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const id = e.target.id.replace('check-', '');
    markCompleted(e.target, id, todoContainer);

  }
});
clearCompleted.addEventListener('click', () => {
  clearMethod(todoContainer);
});