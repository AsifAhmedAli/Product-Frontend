import styles from '../../pages/dashboard/Dashboard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({ toggleSidebar, setToggleSidebar }) {
    return (
        <div className={`${styles.sidebar} fixed top-0 ${toggleSidebar ? `-left-full` : `left-0`} pb-14 border-r-2 sm:border-r-0 mb-4 sm:bg-transparent bg-blue-100 z-40`}>
            <div className="pb-24 relative">
                <div className="w-4/5 m-auto sm:pt-1 pt-5">
                    <Image src='/logo.png' width="300px" height="120px" />
                </div>
                <div className="absolute top-2 right-2 visible sm:hidden" onClick={() => setToggleSidebar(!toggleSidebar)}>
                    <i className="fas fa-times text-2xl cursor-pointer text-blue-500 hover:text-blue-700"></i>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="transition-all hover:shadow-md w-1/2 block mx-auto text-blue-500 hover:text-blue-700 text-left py-2 font-bold mb-6 rounded-lg">
                        <Link href="/">
                            <div className="pl-4 cursor-pointer flex items-center">
                                <i className="mx-2 fas fa-lightbulb pr-4 text-xl"></i>
                                <div className="sm:text-md">Dashboard</div>
                            </div>
                        </Link>
                    </div>
                    <div className="transition-all hover:shadow-md w-1/2 block mx-auto text-blue-500 hover:text-blue-700 text-left py-2 font-bold mb-6 rounded-lg">
                        <Link href="/">
                            <div className="pl-4 cursor-pointer flex items-center hover:text-blue-700">
                                <i className="mx-2 fas fa-wallet pr-4 text-xl"></i>
                                <div className="sm:text-md">Wallet</div>
                            </div>
                        </Link>
                    </div>
                    <div className="transition-all hover:shadow-md w-1/2 block mx-auto text-blue-500 hover:text-blue-700 text-left py-2 font-bold mb-6 rounded-lg">
                        <Link href="/">
                            <div className="pl-4 cursor-pointer flex items-center">
                                <i className="mx-2 fas fa-shopping-basket pr-4 text-xl"></i>
                                <div className="sm:text-md">Buy Stars</div>
                            </div>
                        </Link>
                    </div>
                    <div className="transition-all hover:shadow-md w-1/2 block mx-auto text-blue-500 hover:text-blue-700 text-left py-2 font-bold mb-6 rounded-lg">
                        <Link href="/">
                            <div className="pl-4 cursor-pointer flex items-center">
                                <i className="mx-2 fas fa-comments pr-4 text-xl"></i>
                                <div className="sm:text-md">Chat Box</div>
                            </div>
                        </Link>
                    </div>
                    <div className="transition-all hover:shadow-md w-1/2 block mx-auto text-blue-500 hover:text-blue-700 text-left py-2 font-bold mb-6 rounded-lg">
                        <Link href="/">
                            <div className="pl-4 cursor-pointer flex items-center">
                                <i className="mx-2 fas fa-user-friends pr-4 text-xl"></i>
                                <div className="sm:text-md">Friends List</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
