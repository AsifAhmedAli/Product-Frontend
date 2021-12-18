import FriendCard from "./FriendCard"
import FrontCard from "./FrontCard"

function FriendsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 textColorBlue">
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Elza Patel"
      />
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Murazik"
        online={true}
      />
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Gianni"
        online={true}
      />
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Stacie"
      />
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Calhoun"
        online={true}
      />
      <FriendCard
        image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="not found"
        name="Mark"
      />
    </div>
  )
}

export default FriendsList
