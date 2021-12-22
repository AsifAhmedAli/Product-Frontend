import { useState } from "react"

function UsersRecord({ id, name, status, date }) {
  const [isOpenAction, setIsOpenAction] = useState(false)
  return (
    <>
      <tr className="relative text-center mb-2">
        <td className="">{id}</td>
        <td>{name}</td>
        <td>{status}</td>
        <td>{date}</td>
        <td>
          <button className="bg-blue-200 py-1 px-5 rounded-lg shadow ">
            View
          </button>
        </td>
        <td>
          <button className="bg-red-200 py-1 px-5 rounded-lg shadow ">
            View
          </button>
        </td>

        <td>
          <div className="flex items-center justify-center w-full ">
            <label htmlFor={id} className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id={id} className="sr-only" />
                <div className="grayBg block bg-blue-900 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
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
    </>
  )
}

export default UsersRecord
