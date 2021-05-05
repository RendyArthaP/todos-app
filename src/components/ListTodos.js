import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { getItems } from '../redux/actions/items.actions';
import ListItems from '../components/ListItems';
import TaskItems from './modal/TaskItems';

const ListTodos = ({colors, todo, index}) => {
  const dispatch = useDispatch()
  // const dataItems = useSelector((state) => state)
  const [modalTask, setModalTask] = useState(false)
  const [addTask, setAddTask] = useState({
    taskName: "",
    percentage: ""
  })
  const [listTask, setListTask] = useState([])
  const handleAddTask = () => {
    setListTask([...listTask, addTask])
    setAddTask({
      taskName: "",
      percentage: ""
    })
    setModalTask(false)
  }

  const handleModalTask = () => {
    setModalTask(!modalTask)
    console.log(todo)
  }

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
        className="rounded-lg w-full h-auto my-4 p-3 lg:w-64 lg:mr-8"
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
              className="font-rubik mt-2 text-xs font-medium text-black"
            >
              {handleErrorTodo()}
            </span>
          </div>
          <ListItems />
          <div 
            className="flex flex-row mt-40 cursor-pointer"
            onClick={handleModalTask}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 flex">
              <span className="mx-auto -mt-2 font-medium text-xl ">
                +
              </span>
            </div>
            <span className="ml-1 font-rubik font-normal text-sm">New Task</span>
          </div>
        </div>
      </div>
      {modalTask && (
        <TaskItems 
          setModalTask = {setModalTask}
          handleAddTask = {handleAddTask}
          addTask = {addTask}
          setAddTask = {setAddTask}
          listTask = {listTask}
          setListTask = {setListTask}
        />
      )}
    </>
  )
}

export default ListTodos
