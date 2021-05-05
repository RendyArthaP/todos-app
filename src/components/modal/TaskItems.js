import React from 'react'

const TaskItems = ({setModalTask, handleAddTask, addTask, setAddTask}) => {
  const closeModal = () => {
    setModalTask(false)
  }

  const handleChange = (e) => {
    setAddTask({
      ...addTask,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center border">
      <div className="hidden md:flex w-screen h-screen bg-black absolute top-0 left-0 opacity-20 z-10"></div>
        <div className="bg-white w-full h-full md:max-w-md md:h-64 mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="p-4 w-full md:p-6">
            <h1 className="font-rubik font-bold text-base">
              Create Task
            </h1>
            <div className="flex flex-col py-2">
              <label className="font-openSans font-normal text-xs">
                Task Name
              </label>
              <input 
                className="mt-1 w-full h-8 border border-gray rounded p-1 focus:outline-none font-openSans font-normal text-sm"
                value={addTask.taskName}
                onChange={handleChange}
                type="text"
                name="taskName"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="font-openSans font-normal text-xs">
                Progress
              </label>
              <input 
                className="mt-1 w-16 h-8 border border-gray rounded p-1 focus:outline-none font-openSans font-normal text-sm"
                value={addTask.percentage}
                onChange={handleChange}
                name="percentage"
                type="number"
              />
            </div>
            <div className="flex flex-row justify-between mt-4">
              <div></div>
              <div className="flex flex-row">
                <button 
                  className="border border-button py-2 px-4 rounded text-gray font-normal text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button 
                  className="bg-button ml-3 py-2 px-3 rounded text-white font-normal text-sm"
                  onClick={handleAddTask}
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TaskItems
