import React from 'react'

const ListItems = ({listTask}) => {

  return (
    <>
      <div>
        {listTask.length === 0 
          ?
            <div className="flex flex-col justify-center rounded-lg w-full my-2 p-4 lg:mx-0.5 border border-grey lg:w-56 h-28 lg:mr-8">
              <h1 className="text-grey font-normal text-sm text-center">
                No Task Available
              </h1>
            </div>
          :
            <>
              {listTask.map((task, index) => {
                return (
                  <div 
                    className="flex flex-col justify-between rounded-lg w-full my-2 p-4 lg:mx-0.5 border border-grey bg-white lg:w-56 h-28 lg:mr-8"
                    key={index}
                  >
                    <h1 className="font-rubik font-medium text-sm">
                      {task.taskName}
                    </h1>
                    <div className="flex flex-row justify-between">
                      <div className="bg-progress rounded w-24 h-2 mt-3">
                        <div className={task.percentage === '100' ? 'bg-progressSuccess h-2 rounded flex' : 'bg-daybreak-blue h-2 rounded flex'}
                          style={{
                            width: `${task.percentage}%`
                          }}
                        >
                          <span className="text-xs font-rubik font-normal ml-28 -mt-1">
                            {task.percentage === '100' 
                              ? 
                                <div className="rounded-full bg-progressSuccess w-4 h-4 flex">
                                  <span className="text-white m-auto">
                                    ✓
                                  </span>
                                </div>
                              :
                                <>
                                  {Number(task.percentage)}%
                                </>
                            }
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-base">
                          ...
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
        }
      </div>
    </>
  )
}

export default ListItems
