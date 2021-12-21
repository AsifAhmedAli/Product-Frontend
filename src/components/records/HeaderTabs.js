function HeaderTabs({ selected }) {
  return (
    <div className="textColorBlue flex overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700 space-x-4 p-4">
      <div
        className={`${
          selected == 1 ? "blueBackground" : "bg-white"
        } flex flex-col md:flex-row items-center justify-between  rounded-lg p-2`}
      >
        <p className="textHeading">83</p>
        <p>Kamaobay users</p>
      </div>
      <div
        className={`${
          selected == 2 ? "blueBackground" : "bg-white"
        } flex flex-col md:flex-row items-center justify-between  rounded-lg p-2`}
      >
        <p className="textHeading">14</p>
        <p>Uploaded Games</p>
      </div>
      <div
        className={`${
          selected == 3 ? "blueBackground" : "bg-white"
        } flex flex-col md:flex-row items-center justify-between  rounded-lg p-2`}
      >
        <p className="textHeading">16</p>
        <p>New task</p>
      </div>
      <div
        className={`${
          selected == 4 ? "blueBackground" : "bg-white"
        } flex flex-col md:flex-row items-center justify-between  rounded-lg p-2`}
      >
        <p className="textHeading">100+</p>
        <p>Video/ Ads</p>
      </div>
      <div
        className={`${
          selected == 5 ? "blueBackground" : "bg-white"
        } flex flex-col md:flex-row items-center justify-between  rounded-lg p-2`}
      >
        <p className="textHeading">10K+</p>
        <p>Share Stars</p>
      </div>
    </div>
  )
}

export default HeaderTabs
