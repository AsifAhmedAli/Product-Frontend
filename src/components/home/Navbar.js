// import React, { useState } from "react";
//
// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     return (img
//         <nav className="py-2 px-4 sm:px-0 relative z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex-shrink-0">
//                         <img
//                             className="h-8 w-8"
//                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                             alt="Workflow"
//                         />
//                     </div>
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             <a
//                                 href="#"
//                                 className=" hover:text-orange-800 text-white px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 Dashboard
//                             </a>
//
//                             <a
//                                 href="#"
//                                 className="text-gray-300 hover:text-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 Team
//                             </a>
//
//                             <a
//                                 href="#"
//                                 className="text-gray-300 hover:text-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 Projects
//                             </a>
//
//                             <a
//                                 href="#"
//                                 className="text-gray-300 hover:text-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 Calendar
//                             </a>
//
//                             <a
//                                 href="#"
//                                 className="text-gray-300 hover:text-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                             >
//                                 Reports
//                             </a>
//                         </div>
//                     </div>
//                     <button className="hover:bg-transparent hover:text-white transition-colors bg-white text-black px-3 py-1 rounded-md text-sm font-medium border-white border-opacity-50 border-2">Lets Talk</button>
//                     <div className="-mr-2 flex md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             type="button"
//                             className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                             aria-controls="mobile-menu"
//                             aria-expanded="false"
//                         >
//                             <span className="sr-only">Open main menu</span>
//
//                             <svg
//                                 className="block h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 />
//                             </svg>
//
//                             <svg
//                                 className="hidden h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//
//             {isOpen && (
//                 <div className="md:hidden transition-all" id="mobile-menu">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <a
//                             href="#"
//                             className="hover:text-orange-800 text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Dashboard
//                         </a>
//
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-orange-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Team
//                         </a>
//
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-orange-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Projects
//                         </a>
//
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-orange-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Calendar
//                         </a>
//
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-orange-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Reports
//                         </a>
//                     </div>
//                 </div>
//             )}
//
//         </nav>
//     );
// }
// export default Navbar;
//
import Image from "next/image"
import { useState } from "react"
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSession, setIsOpenSession] = useState(false)
  const [session, setSession] = useState(true)
  return (
    <div className="relative z-20" id="home_navbar">
      {/* <img
        className="absolute -top-full -left-3/4 z-0 hidden lg:block"
        src="/assets/blob2.svg"
        alt=""
      /> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* grid */}
          <img
            className="h-24 w-64 object-contain"
            src="/assets/logo.png"
            alt=""
          />
          <div className="col-span-2 py-4">
            <div className="lg:hidden text-right align-middle text-3xl textColorBlue">
              <i
                className="fas fa-bars border p-2 rounded-lg border-blue-800 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              ></i>
            </div>
            <div className="hidden lg:flex items-center justify-between textColorBlue">
              <p className="">Home</p>
              <p className="">About</p>
              <p className="">What We Do</p>
              <p className="">How To Earn</p>
              <p className="">Pricing</p>
              <p className="">Contact Us</p>

              {session ? (
                <div>
                  <div
                    className="inline bg-blue-300 text-blue-700 font-bold p-3 rounded-md cursor-pointer"
                    onClick={() => setIsOpenSession(!isOpenSession)}
                  >
                    MJ
                  </div>
                  {isOpenSession && (
                    <div className="absolute mt-4 -ml-36 flex flex-col textColorBlue w-48 bg-blue-100 rounded-lg align-middle">
                      <p className="smallNavSession">Profile</p>
                      <Link href="/dashboard">

                        <p className="smallNavSession">Dashboard</p>
                      </Link>
                      <p className="p-4">Settings</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-full border-blue-800 textColorBlue h-12 my-auto">
                  <button className="">LOGIN</button>
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:flex lg:hidden flex-col textColorBlue">
            <p className="smallScreenNavLink">Home</p>
            <p className="smallScreenNavLink">About</p>
            <p className="smallScreenNavLink">What We Do</p>
            <p className="smallScreenNavLink">How To Earn</p>
            <p className="smallScreenNavLink">Pricing</p>
            <p className="smallScreenNavLink">Contact Us</p>
            {session ? (
              <div>
                <p
                  className="w-12 bg-blue-300 text-blue-700 font-bold p-3 rounded-md cursor-pointer"
                  onClick={() => setIsOpenSession(!isOpenSession)}
                >
                  MJ
                </p>
                {isOpenSession && (
                  <div className="absolute mt-4 flex flex-col textColorBlue w-48 bg-blue-100 rounded-lg align-middle">
                    <p className="smallNavSession">Profile</p>
                    <p className="smallNavSession">Dashboard</p>
                    <p className="p-4">Settings</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between space-x-2 p-4 border rounded-full border-blue-800 textColorBlue h-12 my-auto">
                <button className="">LOGIN</button>
                <i className="fas fa-arrow-right"></i>
              </div>
            )}
          </div>
        )}
        {/* {isOpenSession && (
        <div className="flex flex-col textColorBlue w-48 bg-blue-100 rounded-lg align-middle">
        <p className="smallNavSession">Profile</p>
        <p className="smallNavSession">Dashboard</p>
        <p className="p-4">Settings</p>
        </div>
      )} */}
      </div>
    </div>
  )
}
export default Navbar
