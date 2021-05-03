import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { getTodos } from '../redux/actions/todos.actions';
import { useSelector, useDispatch } from 'react-redux';
import ListTodos from '../components/ListTodos';

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.handleTodos.data)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col w-full py-4 px-2">
        <h1>
          Product Roadmap
        </h1>
        <div className="flex flex-col">
          {todos.map((todo) => {
            return (
              <ListTodos 
                todo = {todo}
                key = {todo.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
