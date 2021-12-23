import GamesRecord from "./GamesRecord"

function Games() {
  return (
    <div className="bg-white rounded-lg p-12">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700">
        <table className="table textColorBlue table-auto w-full">
          <thead className="">
            <th>ID</th>
            <th>Games Name</th>
            <th>Upload Date</th>
            <th>Status</th>
            <th>Type</th>
            <th>Stars Required</th>
            <th>Action</th>
          </thead>
          <tbody>
            <GamesRecord
              id="212324"
              name="Fruit Ninja"
              status={true}
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <GamesRecord
              id="212325"
              name="Subway Surfers"
              status={false}
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <GamesRecord
              id="212326"
              name="Candy Crush Saga"
              status={true}
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <GamesRecord
              id="212327"
              name="Homescapes"
              status={true}
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <GamesRecord
              id="212328"
              name="Angry Birds"
              status={true}
              date="21/09/2021"
              type="premium"
              stars="99"
            />
            <GamesRecord
              id="212329"
              name="Super Mario Run"
              status={false}
              date="21/09/2021"
              type="premium"
              stars="29"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Games
