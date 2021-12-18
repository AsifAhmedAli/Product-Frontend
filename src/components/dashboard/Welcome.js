
export default function Welcome() {
    return (
      <div className="col-span-3 lg:col-span-2 bg-gradient-to-r from-blue-900 to-blue-700 relative z-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-white rounded-lg px-8 sm:py-4 py-8 max-h-40">
        <div className="text-center lg:text-left my-4">
          <h1 className="capitalize md:text-3xl font-bold text-2xl">
            Hello Awais
          </h1>
          <p className="mt-2">Ready to start your investment !</p>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="bg-black bg-opacity-20 rounded-md px-4 py-1 flex items-center justify-center space-x-2 text-xs md:text-xl">
            <i className="far fa-check-square"></i>
            <h1 className="text-gray-200">Completed Tasks</h1>
          </div>
          <div className="bg-black bg-opacity-20 rounded-md px-4 py-1 flex items-center justify-center text-xs md:text-xl">
            <i className="fas fa-plus-circle pr-4"></i>
            <h1 className="pr-4 text-gray-200">99,999</h1>
            <i className="fas fa-star text-yellow-400"></i>
          </div>
        </div>
      </div>
    )
}
