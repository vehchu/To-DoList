import { useState, useEffect } from 'react'
import './App.css'
import './ToDoItem.jsx'
import ItemCard from './ToDoItem.jsx'

function App() {

  const regex = /^[a-zA-Z\s]*$/;

  const [input, setInput] = useState("")
  const [isError, setIsError] = useState(false)
  const [isFull, setIsFull] = useState("")
  const [DateInput, setDateInput] = useState("")
  const [todoList, setList] = useState([])

  function addTodo() {
    setList([...todoList, { title: input, date: DateInput }])
  }

  function deleteItem(key) {
    //console.log(key);
    todoList.splice(key, 1);
    setList([...todoList]);
  }

  useEffect(()=>{
      if (todoList.length >= 5){
        deleteItem(5) 
        setIsFull(true)
      }
      else{
        setIsFull(false)
      }
  }, [todoList])


  useEffect(()=>{
    if(!regex.test(input)){
      console.log(regex.test(input))
      setIsError(true)
    }
    else{
      setIsError(false)
    }
  }, [input])

  return (
    <>
      <h1>To Do's:</h1>
      <input 
        className={isError ? 'error-outline' : 'normal-outline'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="date"
        value={DateInput}
        onChange={(d) => setDateInput(d.target.value)}
      />

      <button disabled = {isError || isFull}
        onClick={addTodo}>Add To Do</button>

      {isError && (
        <div className='checkError'>
          <p>No Special Characters or Numbers</p>
        </div>
      )}

      {isFull && (
        <div className='checkFull'>
          <p>To Do List is full</p>
        </div>
      )}

        {todoList.map((item, index) => (
          <ItemCard
            Title={item.title}
            DDate={item.date}
            deleteItem={() => deleteItem(index)}
          />
      ))}

    </>
  )

}

export default App
