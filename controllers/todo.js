export const addTodo = (req, res, next) => {
    res.json('Todo was added')
}

export const getTodos = (req, res, next) => {
    res.json('All todos')
}

export const updateTodo = (req, res, next) => {
    res.json('Todo Updated')
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted')
}
