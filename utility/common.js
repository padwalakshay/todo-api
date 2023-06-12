import todos from '../modal/todolist.js'

function getData() {
    return todos;
}

function addData(data) {
    todos.push(data)
}

function doneData(id) {
    todos.find((m) => m.id == id).action = true;
}

function deleteData(id) {
    todos.splice(todos.findIndex(m => m.id == id),1)
}

export default { getData, addData, doneData, deleteData }