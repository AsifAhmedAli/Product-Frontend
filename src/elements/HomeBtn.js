export default function HomeBtn({ children, white, full }) {
    return (
        <button className={`py-3 px-14 text-sm rounded-lg bg-transparent border-white border-opacity-50 border-2 transition-colors mb-4 ${full && `w-4/5`} lg:mb-0 ${white ? "bg-white text-gray-800 hover:bg-transparent hover:text-white" : "hover:bg-white hover:text-black"}`} >
            {children}
        </button>
    )
}
