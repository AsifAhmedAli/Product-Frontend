function EarningHistory({ task, points, time }) {
  return (
    <div className="textColorBlue text-xs md:text-sm lg:text-xl flex items-center justify-between">
      <div className="flex items-center space-x-4 p-2 w-32 md:w-60 lg:w-80 xl:w-96">
        <i className="far fa-paper-plane text-white p-2 rounded-full bg-blue-900" />
        <p>{task}</p>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <p>{points} points</p>
        <p>{time} ago</p>
        <button className="friendBtn1 lg:px-12">Delete</button>
      </div>
    </div>
  )
}

export default EarningHistory
