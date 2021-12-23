import TasksRecord from "./TasksRecord"

function Tasks() {
  return (
    <div className="bg-white rounded-lg p-12">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700">
        <table className="table textColorBlue table-auto w-full">
          <thead className="">
            <th>ID</th>
            <th>Description</th>
            <th>Upload Date</th>
            <th>Status</th>
            <th>Type</th>
            <th>Stars Required</th>
            <th>Action</th>
          </thead>
          <tbody>
            <TasksRecord
              id="212324"
              name="Copy"
              status="Show"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <TasksRecord
              id="212325"
              name="Share"
              status="Hide"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <TasksRecord
              id="212326"
              name="Subscribe"
              status="Running"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <TasksRecord
              id="212327"
              name="Data Entry"
              status="Running"
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <TasksRecord
              id="212328"
              name="Survey"
              status="Running"
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <TasksRecord
              id="212329"
              name="Share"
              status="Hide"
              date="21/09/2021"
              type="premium"
              stars="29"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tasks
