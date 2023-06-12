import express from 'express';
import { validate } from 'express-validation';
import todolistctrl from '../controllers/todo.controller.js'
import paramValidation from '../config/param-validation.js';
const router = express.Router();

router.get('/lists', todolistctrl.getlists);
router.post('/addTodo', validate(paramValidation.addTodo), todolistctrl.addTodo)
router.put('/doneTodo/:id', validate(paramValidation.doneTodo), todolistctrl.doneTodo)
router.delete('/deleteTodo/:id', validate(paramValidation.doneTodo), todolistctrl.deleteTodo)

export default router;