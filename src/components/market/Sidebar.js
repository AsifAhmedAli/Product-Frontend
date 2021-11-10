import styles from '../../pages/market/Market.module.css';
import Link from 'next/link';

export default function Sidebar({ setRoute }) {
    return (
        <div className={`${styles.sidebar} py-14 border-r-2 border-opacity-50 mb-4`}>
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
