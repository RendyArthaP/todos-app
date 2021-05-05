import React from 'react'

const ListItems = ({listTask}) => {
  return (
    <div className="">
      <div>
        {listTask.map((task, index) => {
          return (
            <div 
              className="rounded-lg w-full my-2 p-4 lg:mx-0.5 border border-grey bg-white lg:w-56 h-28 lg:mr-8"
              key={index}
            >
              <h1 className="font-rubik font-medium text-sm">
                {task.taskName}
              </h1>
              <div className="bg-progress rounded w-24 mt-10 h-2">
                <div className="bg-daybreak-blue h-2 rounded"
                  style={{
                    width: `${task.percentage}%`
                  }}
                >
                </div>
                <span className="text-xs font-rubik font-normal">
                  {task.percentage}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListItems
