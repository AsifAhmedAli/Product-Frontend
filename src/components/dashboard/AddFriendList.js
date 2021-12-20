import AddFriend from "./AddFriend"

function AddFriendList() {
  return (
    <div className="textColorBlue my-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="bg-white space-x-4 p-2 w-max rounded-lg mb-2">
          {/* search */}
          <i className="fas fa-search"></i>
          <input
            className="bg-transparent p-2 outline-none focus:ring-0 placeholder-blue-900"
            placeholder="Search by name"
            type="text"
          />
        </div>
        <div className="space-x-4 text-white bg-blue-900 py-4 px-8 rounded-lg mb-2">
          {/* button */}
          <i className="fas fa-map-marker"></i>
          <span>Add new friends</span>
        </div>
      </div>
      <div className="my-4 changeBackground">
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Elza"
          active="1 hour"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Murazik"
          active="2 hour"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Gianni"
          active="13 hours"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Mark"
          active="2 days"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Calhoun"
          active="3 days"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Elza"
          active="1 hour"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Elza"
          active="1 hour"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Elza"
          active="1 hour"
        />
        <AddFriend
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          name="Elza"
          active="1 hour"
        />
      </div>
      <div className="flex justify-center my-4">
        <button className="loadMoreBtn">Load More...</button>
      </div>
    </div>
  )
}

export default AddFriendList
