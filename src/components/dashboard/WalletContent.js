import HomeBtn from "../../elements/HomeBtn"

function WalletContent() {
  return (
    <div className="mt-4 textColorBlue">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* grid */}
        <div className="bg-white h-72 p-8 m-4 rounded-lg flex flex-col  justify-between">
          {/* main stars */}
          <div>
            <p className="mb-4">Your Main Stars</p>
            <h1 className="textHeading">1,00,000</h1>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* buttons */}
            <HomeBtn text="Transfer" background="blue" />
            <HomeBtn text="Withdraw" />
          </div>
        </div>
        <div className="bg-white h-72 p-8 m-4 rounded-lg flex flex-col  justify-between">
          {/* statements*/}
          <div>
            <div className="flex justify-between mb-4">
              <p>Statements</p>
              <p>Semptember</p>
            </div>
            <div className="flex items-baseline space-x-4">
              <h1 className="textHeading">1,00,000</h1>
              <p className="">Stars</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 font-bold">Transfer</p>
              <p>20,000</p>
              <p className="text-sm">Stars</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Withdraw</p>
              <p>20,000</p>
              <p className="text-sm">Stars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletContent
