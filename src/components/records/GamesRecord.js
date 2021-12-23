import { useState } from "react"

function GamesRecord({ id, name, date, status, type, stars }) {
    const [isOpenAction, setIsOpenAction] = useState(false)
    const [running, setRunning] = useState(status)
  return (
    <tr className="relative text-center mb-2">
      <td className="">#{id}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <button
          className={`${
            running ? "bg-blue-200" : "bg-gray-200 text-black"
          } w-24 py-1 rounded-lg shadow `}
          onClick={() => setRunning(!running)}
        >
          {running ? "Running" : "Stop"}
        </button>
      </td>

      <td>{type}</td>
      <td>{stars} stars</td>
      <td>
        <i
          className="cursor-pointer fas fa-ellipsis-h"
          onClick={() => setIsOpenAction(!isOpenAction)}
        ></i>
        {isOpenAction && (
          <div className="absolute z-10 -ml-24 shadow-lg flex flex-col textColorBlue w-40 bg-white rounded-lg p-4 text-left">
            <div className="editRecord">
              <i className="fas fa-edit"></i>
              <span>Edit</span>
            </div>
            <div className="editRecord">
              <i className="fas fa-edit"></i>
              <span>Delete</span>
            </div>
            <div className="editRecord">
              <i className="fas fa-edit"></i>
              <span>Block</span>
            </div>
          </div>
        )}
      </td>
    </tr>
  )
}

export default GamesRecord
