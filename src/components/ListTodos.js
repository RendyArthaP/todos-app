import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { getItems } from '../redux/actions/items.actions';

const ListTodos = ({colors, todo, index}) => {
  const dispatch = useDispatch()
  const dataItems = useSelector((state) => state)

  const handleErrorTodo = () => {
    if(todo.description === null) {
      return 'January - March'
    } else if(todo.description === 'September - December') {
      return 'October - December'
    } else {
      return todo.description
    }
  }

  useEffect(() => {
    dispatch(getItems(todo.id))
  }, [dispatch, todo])

  return (
    <>
        <div 
          className="rounded-lg w-full h-64 my-4 p-3"
          style={{
            border: colors[index].borderColors, 
            backgroundColor: colors[index].backgroundColors
          }}
        >
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div 
                className="w-24 rounded text-center"
                style={{border: colors[index].borderText}}
              >
                <h1 
                  className="font-rubik text-xs font-normal"
                  style={{color: colors[index].textColors}}
                >
                  {todo.title}
                </h1>
              </div>
              <span 
                className="font-rubik my-1 text-xs font-medium text-black"
              >
                {handleErrorTodo()}
              </span>
            </div>
            <div className="flex flex-row mt-40">
              <div className="border-2 border-black rounded-full w-5 h-5 flex">
                <span className="mx-auto -mt-2 font-medium text-xl ">
                  +
                </span>
              </div>
              <span className="ml-1 font-rubik font-normal text-sm">New Task</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default ListTodos
