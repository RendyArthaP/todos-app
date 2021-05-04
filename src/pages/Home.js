import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { getTodos } from '../redux/actions/todos.actions';
import { useSelector, useDispatch } from 'react-redux';
import ListTodos from '../components/ListTodos';

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.handleTodos.data)

  const [colors] = useState([
    {
      id:0,
      borderColors: "1px solid #EB2F96",
      borderText: "1px solid #FFADD2",
      backgroundColors: "#FFF9FB",
      textColors: "#EB2F96"
    },
    {
      id:1,
      borderColors: "1px solid #7B61FF",
      borderText: "1px solid #D3ADF7",
      backgroundColors: "#FCFAFD",
      textColors: "#7B61FF"
    },
    {
      id:2,
      borderColors: "1px solid #2F54EB",
      borderText: "1px solid #ADC6FF",
      backgroundColors: "#F7FAFF",
      textColors: "#2F54EB"
    },
    {
      id:3,
      borderColors: "1px solid #52C41A",
      borderText: "1px solid #B7EB8F",
      backgroundColors: "#F8FEF1",
      textColors: "#52C41A"
    },
  ])

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col w-full p-4">
          <h1>
            Product Roadmap
          </h1>
          <div className="flex flex-col w-full lg:flex-row lg:flex-wrap">
            {todos.map((todo, index) => {  
              return (
                <ListTodos 
                  todo = {todo}
                  colors = {colors}
                  index = {index}
                  key = {todo.id}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
