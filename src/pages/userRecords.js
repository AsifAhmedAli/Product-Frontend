import Navbar from "../components/dashboard/Navbar"
import HeaderTabs from "../components/records/HeaderTabs"
import Users from "../components/records/Users"

function userRecords() {
  return (
    <div>
      <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
        <div>
          <Navbar />
          <HeaderTabs selected={1} />
          <Users />
        </div>
      </main>
    </div>
  )
}

export default userRecords
