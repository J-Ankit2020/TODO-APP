* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
  background-color: hsl(235, 21%, 11%);
  font-size: 18px;
}
.background-image {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 350px;
  z-index: -1;
}
.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}
.container {
  max-width: 700px;
  width: 100%;
  margin: 0 30px;
  margin-top: 100px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  color: white;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 10px;
}
.theme {
  transition: all 2s ease-in-out;
  cursor: pointer;
}
.new-todo {
  background-color: hsl(235, 24%, 19%);
  height: 70px;
  margin-top: 50px;
  display: flex;
  border-radius: 6px;
}
.check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
}
.check-mark {
  width: 30px;
  height: 30px;
  border: 2px solid hsl(237, 14%, 26%);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}
.check-mark img {
  visibility: hidden;
}
.check-mark:hover,
.check-mark.checked {
  background-image: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
}
.check-mark:hover img,
.check-mark.checked img {
  visibility: visible;
}
.todo-text.checked {
  text-decoration: line-through;
  color: hsl(233, 14%, 35%);
}
.new-input {
  display: flex;
  flex-grow: 1;
  align-items: center;
}
.new-input form {
  flex-grow: 1;
}
.new-input input {
  width: 100%;
  padding: 10px 0px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  color: hsl(234, 39%, 85%);
}
.new-input input::placeholder {
  color: hsl(233, 14%, 35%);
}
.todo-items-wrapper {
  margin-top: 30px;
  background-color: hsl(235, 24%, 19%);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.4);
}
.todo-item {
  width: 100%;
  background-color: hsl(235, 24%, 19%);
  display: flex;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid hsl(237, 14%, 26%);
  transition: all 0.25s;
}
.todo-item:hover {
  box-shadow: 0px 0px 7px 0px hsl(235, 21%, 11%);
  transform: translateY(-2px);
  border-color: hsl(235, 24%, 19%);
}
.cross {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0px 30px;
  background: transparent;
}
.cross img {
  visibility: hidden;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
}
.todo-item:hover .cross img {
  visibility: visible;
}
.todo-text {
  display: flex;
  align-items: center;
  color: hsl(234, 39%, 85%);
  font-size: 18px;
}
.todo-items-info {
  height: 70px;
  width: 100%;
  color: hsl(233, 14%, 35%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.items-status {
  display: flex;
  justify-content: center;
}
.items-status span {
  padding: 0 6px;
  cursor: pointer;
}
.items-status span:hover,
.items-status span.current,
.items-clear:hover {
  color: hsl(220, 98%, 61%);
}
.items-clear {
  cursor: pointer;
  text-align: end;
}
@media only screen and (max-width: 600px) {
  .items-left,
  .items-clear {
    visibility: hidden;
  }
}
