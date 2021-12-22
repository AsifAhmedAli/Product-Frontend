import UsersRecord from "./UsersRecord"

function Users() {
  return (
    <div className="bg-white rounded-lg p-12">
      <table className="relative table textColorBlue w-full table-fixed">
        <thead className="">
          <th>ID</th>
          <th>User Name</th>
          <th>Status</th>
          <th>Created Date</th>
          <th>Transaction</th>
          <th>Payment</th>
          <th>Wallet Block</th>
          <th>Action</th>
        </thead>
        <tbody>
          <UsersRecord
            id="212324"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212325"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212326"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212327"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212328"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212329"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
          <UsersRecord
            id="212330"
            name="Elza"
            status="active"
            date="21/09/2021"
          />
        </tbody>
      </table>
    </div>
  )
}

export default Users
