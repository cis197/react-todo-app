import axios from 'axios'
import {ADD_TODO_SUCCESS} from './types'

export const addTodo = (dispatch, newTodo) => {
  axios.post('/api/todo', {todo: newTodo})
    .then(({data}) => {
      dispatch({ type: ADD_TODO_SUCCESS, todos: data })
    })
}