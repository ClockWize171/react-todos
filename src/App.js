import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa"
import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  // const intialTodos = [
  //   { id: 1, content: 'get bread' },
  //   { id: 2, content: 'get butter' }
  // ]

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      <Heading
        pb='6'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-r, green.500, green.300, blue.500)'
        bgClip='text'>
        Let's note your tasks!
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
