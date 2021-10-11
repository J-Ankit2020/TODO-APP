const form = document.getElementById('form');
const toDoItems = document.querySelector('.todo-items');
const clearItems = document.querySelector('.clear');
const active = document.querySelector('.active');
const all = document.querySelector('.all');
const completed = document.querySelector('.completed');
let toDoItem,
  isWidthSmall = window.innerWidth <= 600 ? true : false;
const wrapper = document.querySelector('.todo-items-wrapper');
const itemsLeft = document.querySelector('.items-left');
const theme = document.querySelector('.theme img');
const bgImg = document.querySelector('.background-image img');
const body = document.querySelector('body');
const newToDO = document.querySelector('.new-todo');
const ToDOInput = document.querySelector('.new-todo input');
const newcheckMark = document.querySelector('.check-mark');
let isDarkModeActive = true;
let checkMark;
let items;
let todoText;
let ToDOInputs;
function makeLight() {
  bgImg.src = './images/bg-desktop-light.jpg';
  theme.src = './images/icon-moon.svg';
  body.style.backgroundColor = 'hsl(0, 0%, 98%)';
  newToDO.style.backgroundColor = 'hsl(236, 33%, 92%)';
  ToDOInput.style.color = 'hsl(235, 19%, 35%)';
  newcheckMark.style.borderColor = 'hsl(236, 9%, 61%)';
  wrapper.style.backgroundColor = 'hsl(236, 33%, 92%)';
  checkMark.forEach(check => (check.style.borderColor = 'hsl(236, 9%, 61%)'));
  toDoItem.forEach(x => (x.style.backgroundColor = 'hsl(236, 33%, 92%)'));
  todoText.forEach(text => (text.style.color = 'hsl(235, 19%, 35%)'));
  isDarkModeActive = false;
}
clearItems.addEventListener('click', function () {});
function makedark() {
  bgImg.src = './images/bg-desktop-dark.jpg';
  theme.src = './images/icon-sun.svg';
  body.style.backgroundColor = 'hsl(235, 21%, 11%)';
  newToDO.style.backgroundColor = 'hsl(235, 24%, 19%)';
  ToDOInput.style.color = 'hsl(234, 39%, 85%)';
  newcheckMark.style.borderColor = 'hsl(237, 14%, 26%)';
  wrapper.style.backgroundColor = 'hsl(235, 24%, 19%)';
  checkMark.forEach(check => (check.style.borderColor = 'hsl(237, 14%, 26%)'));
  toDoItem.forEach(x => (x.style.backgroundColor = 'hsl(235, 24%, 19%)'));
  todoText.forEach(text => (text.style.color = 'hsl(234, 39%, 85%)'));
  isDarkModeActive = true;
}
theme.addEventListener('click', function () {
  if (isDarkModeActive) makeLight();
  else makedark();
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let input = document.getElementById('todo-input');
  if (input.value === '') {
    window.alert('Enter Text first');
    return;
  }
  db.collection('todo-items').add({
    status: 'active',
    text: input.value,
  });
  input.value = '';
});
function deleteItems(items) {
  items.forEach(doc => {
    db.collection('todo-items').doc(doc.id).delete();
  });
}
function getItems() {
  db.collection('todo-items').onSnapshot(snapshot => {
    items = [];
    snapshot.docs.forEach(doc => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
    clearItems.addEventListener('click', function () {
      deleteItems(items);
    });
  });
}
all.addEventListener('click', function () {
  active.classList.remove('current');
  completed.classList.remove('current');
  all.classList.add('current');
  generateItems(items);
});
active.addEventListener('click', function () {
  active.classList.add('current');
  completed.classList.remove('current');
  all.classList.remove('current');
  generateItems(items);
});
completed.addEventListener('click', function () {
  active.classList.remove('current');
  completed.classList.add('current');
  all.classList.remove('current');
  generateItems(items);
});

function generateItems(items) {
  let itemsHTML = '';
  if (all.classList.contains('current')) {
    items.forEach(item => {
      itemsHTML += `<div class="todo-item">
            <div class="check">
              <div data-id=${item.id} class="check-mark ${
        item.status === 'completed' ? 'checked' : ''
      }">
                <img src="images/icon-check.svg" alt="" />
              </div>
            </div>
            <div class="todo-text ${
              item.status === 'completed' ? 'checked' : ''
            }">${item.text}</div>
            <div class="cross" ><img src="images/icon-cross.svg"data-id=${
              item.id
            }/></div>
          </div>`;
    });
  } else if (active.classList.contains('current')) {
    items.forEach(item => {
      if (item.status == 'active') {
        itemsHTML += `<div class="todo-item">
            <div class="check">
              <div data-id=${item.id} class="check-mark ${
          item.status === 'completed' ? 'checked' : ''
        }">
                <img src="images/icon-check.svg" alt="" />
              </div>
            </div>
            <div class="todo-text ${
              item.status === 'completed' ? 'checked' : ''
            }">${item.text}</div>
            <div class="cross" ><img src="images/icon-cross.svg"data-id=${
              item.id
            }/></div>
          </div>`;
      }
    });
  } else {
    items.forEach(item => {
      if (item.status == 'completed') {
        itemsHTML += `<div class="todo-item">
            <div class="check">
              <div data-id=${item.id} class="check-mark ${
          item.status === 'completed' ? 'checked' : ''
        }">
                <img src="images/icon-check.svg" alt="" />
              </div>
            </div>
            <div class="todo-text ${
              item.status === 'completed' ? 'checked' : ''
            }">${item.text}</div>
            <div class="cross" ><img src="images/icon-cross.svg"data-id=${
              item.id
            }/></div>
          </div>`;
      }
    });
  }
  toDoItems.innerHTML = itemsHTML;
  itemsLeft.textContent = `${items.length} Items Left`;
  checkMark = document.querySelectorAll('.todo-item .check-mark');
  toDoItem = document.querySelectorAll('.todo-item');
  todoText = document.querySelectorAll('.todo-text');
  isDarkModeActive === true ? makedark() : makeLight();
  createEventListeners();
}
function createEventListeners() {
  const deleteItems = document.querySelectorAll('.cross img');
  const todoCheckMarks = document.querySelectorAll('.todo-items .check-mark');
  todoCheckMarks.forEach(checkMark => {
    checkMark.addEventListener('click', function () {
      console.log(checkMark.dataset.id);
      markIt(checkMark.dataset.id);
    });
  });
  deleteItems.forEach(dlt => {
    dlt.addEventListener('click', function () {
      const id = dlt.dataset.id;
      db.collection('todo-items').doc(id).delete();
    });
  });
}
function markIt(id) {
  const item = db.collection('todo-items').doc(id);
  item.get().then(function (doc) {
    if (doc.exists) {
      let status = doc.data().status;
      if (status === 'active') {
        item.update({
          status: 'completed',
        });
      } else if (status === 'completed') {
        item.update({
          status: 'active',
        });
      }
    }
  });
}
getItems();
