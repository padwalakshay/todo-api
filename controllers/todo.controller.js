import common from '../utility/common.js';

const getlists = (req, res) => {
    res.json({data:common.getData(), message: 'list of todos', status:'OK'});
}

const addTodo = (req, res) => {
    const data = req.body;
    common.addData(data);
    res.json({data:[data], message:'todo created', status: 'OK'})
}

const deleteTodo = (req,res) => {
    const id = req.params.id
    common.deleteData(id)
    res.json({data:[], message:'todo deleted', status: 'OK'})
}

const doneTodo = (req,res) => {
    const id = req.params.id
    common.doneData(id)
    res.send('data completed');
}

export default {getlists, addTodo, doneTodo, deleteTodo};