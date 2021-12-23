import Navbar from "../components/dashboard/Navbar"
import HeaderTabs from "../components/records/HeaderTabs"
import Tasks from "../components/records/Tasks"

function tasksRecords() {
  return (
    <div>
      <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
        <div>
          <Navbar />
          <HeaderTabs selected={3} />
         <Tasks/>
        </div>
      </main>
    </div>
  )
}

export default tasksRecords
