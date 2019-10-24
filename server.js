const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const todos = ['brocolli', 'sauce', 'broccoli']

const apiRouter = express.Router()
apiRouter.get('/todos', (req,res) => {
  res.json(todos)
})
apiRouter.post('/todo', (req,res) => {
  const newTodo = req.body.todo
  todos.push(newTodo)
  res.json(todos)
})

app.use('/api', apiRouter)

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(3000, () => console.log('listening'));
