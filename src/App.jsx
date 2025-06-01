import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return

    setTodos([...todos, {
      id: Date.now(),
      text: inputValue,
      completed: false
    }])
    setInputValue('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const itemsLeft = todos.filter(todo => !todo.completed).length

  return (
    <div className="app">
      <div className="header">
        <h1>Todo App</h1>
        <button className='theme-toggle' onClick={toggleTheme}>
          <img src={theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg'} alt="theme-toggle" />
        </button>
      </div>

      <div className="container">
        <form className='todo-form' onSubmit={handleSubmit}>
          <div className="check-circle"></div>
          <input 
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Create a new todo...'
            className='todo-input'
          />
        </form>

        <div className="todo-list-container">
          <ul className='todo-list'>
            {filteredTodos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <button 
                  className={`check-circle ${todo.completed ? 'checked' : ''}`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed && <img src='/images/icon-check.svg' alt='check' />}
                </button>
                <span className='todo-text'>{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className='delete-button'
                >
                  <img src='/images/icon-cross.svg' alt='delete' />
                </button>
              </li>
            ))}
          </ul>
          <div className="todo-footer">
            <span className="items-left">
              {itemsLeft} items left
            </span>
            <div className="filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`} 
                onClick={() => setFilter('active')}
              >
                Active
              </button>
              <button 
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} 
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
            <button className='clear-completed' onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
