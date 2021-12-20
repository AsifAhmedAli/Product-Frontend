import HomeBtn from "../../elements/HomeBtn"

function Challenge() {
  return (
    <div className="textColorBlue">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6"> */}
      <div className="flex flex-col md:flex-row space-x-8 my-6">
        <div className="bg-blue-300 h-80 rounded-lg w-full md:w-80 ">
          {/* image */}
        </div>
        <div className="flex flex-col">
          <div className="py-11">
            <p>Watch Dog,</p>
            <p>Games</p>
            <p>22:00 am, 5th dec 2021.</p>
          </div>
          <div className="pb-6">
            <img
              className="h-12 w-16 object-contain rounded-lg"
              src="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <p>User: Mark Jones!</p>
            <p>id: #2415669</p>
          </div>
          <div>
            <HomeBtn text="Start Game" background="blue" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge
