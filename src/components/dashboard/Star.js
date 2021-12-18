import HomeBtn from "../../elements/HomeBtn"

function Star({ price, stars }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-60 p-2 md:p-4 bg-white rounded-lg text-xs">
        <img
          className="w-24 h-14 object-contain"
          src="/assets/logo.png"
          alt=""
        />
        <h1 className="textHeading">RS {price}</h1>
        <p>{stars} stars</p>
        <HomeBtn text="Buy Now" />
      </div>
    </div>
  )
}

export default Star
