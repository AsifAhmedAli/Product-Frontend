import Navbar from "../components/dashboard/Navbar"
import HeaderTabs from "../components/records/HeaderTabs"
import Stars from "../components/records/Stars"

function starsRecords() {
  return (
    <div>
      <main className="sm:p-0 md:p-6 max-w-6xl mx-5 lg:mx-auto overflow-hidden">
        <div>
          <Navbar />
          <HeaderTabs selected={5} />
          <Stars />
        </div>
      </main>
    </div>
  )
}

export default starsRecords
