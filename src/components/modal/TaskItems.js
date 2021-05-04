import React from 'react'

const TaskItems = ({handleModalTask}) => {
  return (
    <div className="">
      <div className="hidden md:flex w-screen h-screen bg-black fixed top-0 left-0 opacity-20"></div>
        <div className="bg-white mx-auto z-20 top-0 left-0 fixed w-screen h-screen md:flex md:max-w-lg md:max-h-80 md:items-center">
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
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="font-openSans font-normal text-xs">
                Progress
              </label>
              <input className="mt-1 w-16 h-8 border border-gray rounded p-1 focus:outline-none font-openSans font-normal text-sm"/>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <div></div>
              <div className="flex flex-row">
                <button 
                  className="border border-button py-2 px-4 rounded text-gray font-normal text-sm"
                  onClick={handleModalTask}
                >
                  Cancel
                </button>
                <button className="bg-button ml-3 py-2 px-3 rounded text-white font-normal text-sm">
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
