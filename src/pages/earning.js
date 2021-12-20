import EarningHistoryList from "../components/dashboard/EarningHistoryList"
import Navbar from "../components/dashboard/Navbar"
import Sidebar from "../components/dashboard/Sidebar"
import Welcome from "../components/dashboard/Welcome"

function earning() {
  return (
    <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
      <div>
        <Navbar />
        <div className="flex space-x-6">
          <Sidebar />
          <div className="grid grid-cols-1 w-full">
            <Welcome />
            <EarningHistoryList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default earning
