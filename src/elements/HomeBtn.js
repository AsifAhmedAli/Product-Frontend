// export default function HomeBtn({ text, white, full }) {
//     return (
//       <button
//         className={`py-3 px-14 text-sm rounded-lg bg-transparent border-white border-opacity-50 border-2 transition-colors mb-4 ${
//           full && `w-4/5`
//         } lg:mb-0 ${
//           white
//             ? "bg-white text-gray-800 hover:bg-transparent hover:text-white"
//             : "hover:bg-white hover:text-black"
//         }`}
//       >
//         {text}
//       </button>
//     )
// }
function HomeBtn({ text, background }) {
  return (
    <div>
      {background == "blue" ? (
        <div className="gradientBlueBtn flex items-center space-x-4 cursor-pointer py-1">
          <p>{text}</p>
          <i className="far fa-paper-plane textColorBlue p-2 rounded-full bg-white" />
        </div>
      ) : (
        <div className="whiteBtn textColorBlue flex items-center space-x-4 cursor-pointer py-1">
          <p>{text}</p>
          <i className="far fa-paper-plane text-white p-2 rounded-full bg-blue-900" />
        </div>
      )}
    </div>
  )
}

export default HomeBtn
