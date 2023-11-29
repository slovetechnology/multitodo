import React, { useState } from 'react'
import DoneTodo from './DoneTodo'
import NotDoneTodo from './assets/NotDoneTodo'

const App = () => {
  const [alldone, setAlldone] = useState([])
  const [allnotdone, setAllnotdone] = useState([])
  const [form, setForm] = useState('')
  const [moveundone, setMoveundone] = useState([])
  const [todoId, setTodoId] = useState([])
  const [todoId2, setTodoId2] = useState([])
  const [status, setStatus] = useState('')
  let newArray = []

  const SubmitTodo = () => {
    if (!form) return alert('Enter a valid title')
    const date = new Date()
    const newData = {
      title: form,
      done: false,
      id: date.getTime()
    }
    setAllnotdone([newData, ...allnotdone])
  }

  const setToMove = (item) => {
    const findItem = moveundone.find(ele => ele.id === item.id)
    if (!findItem) {
      //this means we are checking in to turn blue  
      setMoveundone([item, ...moveundone])
    } else {
      //this means we are checking out from the list
      const checkout = moveundone.filter(ele => ele.id !== item.id)
      setMoveundone(checkout)
    }
  }

  const PerformMovement = () => {
    if(status === 'done') {
      setAlldone(moveundone)
      allnotdone.map(ele => {
        if (!moveundone.includes(ele)) {
          newArray.push(ele)
        }
      })
      setAllnotdone(newArray)
    }else {
      setAllnotdone(moveundone)
      alldone.map(ele => {
        if (!moveundone.includes(ele)) {
          newArray.push(ele)
        }
      })
      setAlldone(newArray)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="">
          <input type="text" value={form} onChange={e => setForm(e.target.value)} className="input" />
          <button onClick={SubmitTodo} className='submit'>submit</button>
        </div>
        <div className="content-container">
          <div className="">
            {allnotdone.map((item, i) => (
              <NotDoneTodo
                item={item}
                key={i}
                setToMove={setToMove}
                todoId={todoId}
                setTodoId={setTodoId}
                setStatus={setStatus}
              />
            ))}
          </div>
          <div className="">
            {status !== '' && <button onClick={PerformMovement} className="submit">move to {status === 'done' ? 'done' : 'undone'}</button>}
          </div>
          <div className="">
            {alldone.map((item, i) => (
              <DoneTodo
                item={item}
                key={i}
                setToMove={setToMove}
                todoId={todoId2}
                setTodoId={setTodoId2}
                setStatus={setStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App