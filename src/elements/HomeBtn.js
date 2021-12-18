function HomeBtn({ text, background }) {
  return (
    <div>
      {background == "blue" ? (
        <div className="gradientBlueBtn flex items-center space-x-4 cursor-pointer py-1 mb-2 w-max">
          <p>{text}</p>
          <i className="far fa-paper-plane textColorBlue p-2 rounded-full bg-white" />
        </div>
      ) : (
        <div
          className={`${
            background == "white" ? "bg-white" : ""
          } transparentBtn textColorBlue flex items-center space-x-4 cursor-pointer py-1 mb-2 w-max`}
        >
          <p>{text}</p>
          <i className="far fa-paper-plane text-white p-2 rounded-full bg-blue-900" />
        </div>
      )}
    </div>
  )
}

export default HomeBtn
