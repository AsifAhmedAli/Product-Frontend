function UsersRecord({ id, name, status, date }) {
  return (
    // <div className="textColorBlue">
    <tr className="text-center mb-2">
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

      <td>toggle</td>
      <td>
        <i className="fas fa-ellipsis-h"></i>
      </td>
    </tr>
    // </div>
  )
}

export default UsersRecord
