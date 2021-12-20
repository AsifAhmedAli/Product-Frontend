function AddFriend({ image, name, active }) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm lg:text-xl my-2 py-2 px-2 md:px-4 rounded-lg">
      <div className="flex items-center space-x-1 md:space-x-4 w-20 md:w-40">
        {/* image name */}
        <img className="w-5 h-5 md:w-10 md:h-10 rounded-full" src={image} alt="" />
        <span>{name}</span>
      </div>
      <div className="w-24 md:w-52 activeStatus">
        {/* active */}
        <p>Active {active} ago</p>
      </div>
      <div className="space-x-1 md:space-x-4">
        {/* buttons */}
        <button className="addFriendBtn1">Add</button>
        <button className="addFriendBtn2">Message</button>
      </div>
    </div>
  )
}

export default AddFriend
