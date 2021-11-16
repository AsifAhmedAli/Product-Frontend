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
                    <i className="fas fa-times text-white text-2xl cursor-pointer hover:text-gray-800 " onClick={() => setToggleSidebar(!toggleSidebar)}></i>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="hover:bg-purple-500 w-1/2 block mx-auto text-white text-left py-2 font-bold mb-4 rounded-lg">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-2 cursor-pointer flex items-centerr flex items-center" onClick={() => setRoute('dashboard')}>
                                <i className="fas fa-lightbulb pr-2 text-xs"></i>
                                <div className="sm:text-sm">Dashboard</div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-purple-500 w-1/2 block mx-auto text-white text-left py-2 font-bold mb-4 rounded-lg">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-2 cursor-pointer flex items-center" onClick={() => setRoute('premium')}>
                                <i className="fas fa-wallet pr-2 text-xs"></i>
                                <div className="sm:text-sm">Wallet</div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-purple-500 w-1/2 block mx-auto text-white text-left py-2 font-bold mb-4 rounded-lg">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-2 cursor-pointer flex items-center" onClick={() => setRoute('chat')}>
                                <i className="fas fa-shopping-basket pr-2 text-xs"></i>
                                <div className="sm:text-sm">Buy Stars</div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-purple-500 w-1/2 block mx-auto text-white text-left py-2 font-bold mb-4 rounded-lg">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-2 cursor-pointer flex items-center" onClick={() => setRoute('settings')}>
                                <i className="fas fa-comments pr-2 text-xs"></i>
                                <div className="sm:text-sm">Chat Box</div>
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-purple-500 w-1/2 block mx-auto text-white text-left py-2 font-bold mb-4 rounded-lg">
                        <Link href="/market">
                            <div className="pl-4 sm:pl-2 cursor-pointer flex items-center" onClick={() => setRoute('settings')}>
                                <i className="fas fa-user-friends pr-2 text-xs"></i>
                                <div className="sm:text-sm">Friends List</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
