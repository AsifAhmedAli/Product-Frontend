import styles from '../../pages/market/Market.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({ setRoute, toggleSidebar, setToggleSidebar }) {
    return (
        <div className={`${styles.sidebar} fixed top-0 ${toggleSidebar ? `-left-full` : `left-0`} pb-14 border-r-2 border-opacity-50 mb-4`}>
            <div className="flex items-center justify-around pb-14">
                <div>
                    <Image src='/logo.png' width="180%" height="100%" />
                </div>
                <div className="visible sm:hidden">
                    <i class="fas fa-times text-white text-2xl cursor-pointer hover:text-gray-800 " onClick={() => setToggleSidebar(!toggleSidebar)}></i>
                </div>
            </div>
            <div className="capitalize bg-white text-primary lg:w-2/3 w-full mx-auto lg:rounded-xl rounded-none text-center py-2 font-bold mb-14">
                Select category
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="hover:bg-white hover:text-primary text-white text-center py-2 font-bold mb-4">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-0 cursor-pointer" onClick={() => setRoute('free')}>
                                Free
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white text-center py-2 font-bold mb-4">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-0 cursor-pointer" onClick={() => setRoute('premium')}>
                                Premium
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white text-center py-2 font-bold mb-4">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-0 cursor-pointer" onClick={() => setRoute('chat')}>
                                Chat box
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white text-center py-2 font-bold mb-4">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-0 cursor-pointer" onClick={() => setRoute('settings')}>
                                Settings
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
