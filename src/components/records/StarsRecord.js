import { useState } from "react"

function StarsRecord({ id, name, status }) {
  const [isOpenAction, setIsOpenAction] = useState(false)
  return (
    <tr className="text-center mb-2">
      <td className="">#{id}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td className="flex items-center justify-between">
        <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
          100
        </button>
        <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
          200
        </button>
        <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
          400
        </button>
        <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
          400
        </button>
        <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
          Customs
        </button>
      </td>
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

export default StarsRecord
