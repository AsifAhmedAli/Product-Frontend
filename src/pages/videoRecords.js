import Navbar from "../components/dashboard/Navbar"
import HeaderTabs from "../components/records/HeaderTabs"
import Videos from "../components/records/Videos"

function videoRecords() {
  return (
    <div>
      <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
        <div>
          <Navbar />
          <HeaderTabs selected={4} />
          <Videos />
        </div>
      </main>
    </div>
  )
}

export default videoRecords
