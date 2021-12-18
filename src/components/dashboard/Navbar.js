// import Link from 'next/link';
// import styles from '../../pages/dashboard/Dashboard.module.css';

// export default function Navbar({toggleSidebar, setToggleSidebar}) {
//     // const [changeBg, setChangeBg] = useState(false);
//     // useEffect(() => {
//     //     if (typeof window !== undefined) {
//     //         window.addEventListener("scroll", handleScroll);
//     //     }
//     // }, [])

//     // const handleScroll = () => {
//     //     if (window.pageYOffset > 50) {
//     //         setChangeBg(true);
//     //     } else {
//     //         setChangeBg(false);
//     //     }
//     // }

//     return (
//         <nav className={`${styles.navbar} z-10`}>
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between flex-wrap py-10">
//                     <div>
//                         <a className="cursor-pointer pl-4 sm:pl-0" onClick={() => setToggleSidebar(!toggleSidebar)}>
//                             <i className="fas fa-bars sm:text-white text-blue-500 text-lg"></i>
//                         </a>
//                     </div>
//                     <div className="icons">
//                         <Link href="/market">
//                             <i className="fas fa-wallet text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
//                         </Link>
//                         <Link href="/market">
//                             <i className="fas fa-bell text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
//                         </Link>
//                         <Link href="/market">
//                             <i className="fas fa-user-circle text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
//                         </Link>
//                         <Link href="/market">
//                             <div className="inline bg-blue-300 text-blue-700 font-bold p-3 rounded-md">MJ</div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }
import Image from "next/image"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSession, setIsOpenSession] = useState(false)
  const [session, setSession] = useState(true)
  return (
    session && (
      <div className="">
        {/* grid */}
        <div className="py-4 flex justify-between">
          <img
            className="h-20 w-52 mb-6 object-contain"
            src="/assets/logo.png"
            alt=""
          />
          <div className="flex items-center justify-end space-x-6 textColorBlue">
            <i className="fas fa-wallet "></i>
            <i className="fas fa-bell "></i>
            <i className="fas fa-user-circle "></i>
            <div
              className="inline bg-blue-300 text-blue-700 font-bold p-3 rounded-md cursor-pointer"
              //   onClick={() => setIsOpenSession(!isOpenSession)}
            >
              MJ
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default Navbar
