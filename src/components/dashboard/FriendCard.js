function FriendCard({ image, name, online }) {
  return (
    <div className="bg-white p-2 md:p-4 rounded-lg">
      <div className="text-right">
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="relative flex flex-col items-center justify-between">
        <i
          className={`${
            online ? "text-green-500" : ""
          } absolute text-xl border-2 border-white rounded-full ml-20 mt-2 fas fa-circle`}
        ></i>
        <img
          className={`${
            online ? "border-green-500" : "border-blue-500"
          } rounded-full w-24 h-24 border-2 mb-3`}
          src={image}
          alt=""
        />
        <p>{name}</p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button className="friendBtn1">Message</button>
          <button className="friendBtn2">Challenge</button>
        </div>
      </div>
    </div>
  )
}

export default FriendCard
