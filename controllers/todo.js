import { TodoModel } from "../models/todo.js"

export const addTodo = async (req, res, next) => {
    try {
        // validate user input
    
        // write todo to database
        console.log(req.body);
        await TodoModel.create(req.body);
    
        // respond to request
        
        res.status(201).json('Todo was added')
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
  try {
    // fetch todos from database
    const todos = await TodoModel.find();

    // return response
      res.status(200).json(todos);
  } catch (error) {
    next(error)
  }
  } 

export const updateTodo = (req, res, next) => {
    res.json('Todo Updated')
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted')
}
