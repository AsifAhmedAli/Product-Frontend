import Navbar from "../components/dashboard/Navbar"
import Games from "../components/records/Games"
import HeaderTabs from "../components/records/HeaderTabs"

function gamesRecords() {
  return (
    <div>
      <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
        <div>
          <Navbar />
          <HeaderTabs selected={2} />
          <Games />
        </div>
      </main>
    </div>
  )
}

export default gamesRecords
