import React from 'react'

const ListTodos = ({todo}) => {
  const handleErrorTodo = () => {
    if(todo.description === null) {
      return 'Jan - Mar'
    } else if(todo.description === 'September - December') {
      return 'October - December'
    } else {
      return todo.description
    }
  }
  return (
    <div className="border w-full h-64 my-4">
      <h1>
        {todo.title}
      </h1>
      <span>
        {handleErrorTodo()}
      </span>
    </div>
  )
}

export default ListTodos
