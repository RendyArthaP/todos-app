import React from 'react'

const ListItems = ({listTask}) => {
  // const handleProgressBar = () => {
  //   if(task.percentage === 100) {
  //     return 'bg-progressSuccess h-2 rounded flex'
  //   } else {
  //     return 'bg-daybreak-blue h-2 rounded flex'
  //   }
  // }
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
                <div className={task.percentage == 100 ? 'bg-progressSuccess h-2 rounded flex' : 'bg-daybreak-blue h-2 rounded flex'}
                  style={{
                    width: `${task.percentage}%`
                  }}
                >
                  <span className="text-xs font-rubik font-normal ml-28 -mt-1">
                    {task.percentage}%
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListItems
