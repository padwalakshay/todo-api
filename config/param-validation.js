import Joi from 'joi';

export default {
    addTodo: {
        body: Joi.object({
            id: Joi.number().min(1).required(),
            name: Joi.string().required(),
            action: Joi.boolean()
        })
    },
    doneTodo: {
        params: Joi.object({
            id: Joi.number().min(1).required()
        })
    }
}