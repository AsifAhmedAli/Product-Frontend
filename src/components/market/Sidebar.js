import styles from '../../pages/market/Market.module.css';
import Link from 'next/link';

export default function Sidebar({ setRoute }) {
    return (
        <div className={`${styles.sidebar} col-span-1 bg-blue-500 rounded-2xl sm:rounded-r-none py-8 sm:py-14 sm:border-r-2 border-opacity-50 sm:rounded-br-none mb-4 sm:mb-0`}>
            <div className="capitalize bg-white text-primary lg:w-2/3 w-full mx-auto lg:rounded-xl rounded-none text-center py-2 font-bold sm:mb-14 mb-4">
                Select category
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold sm:mb-10">
                        <Link href="/market">
                            <div className="lg:pl-14 pl-4 cursor-pointer" onClick={() => setRoute('free')}>
                                Free
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold sm:mb-10">
                        <Link href="/market">
                            <div className="lg:pl-14 pl-4 cursor-pointer" onClick={() => setRoute('premium')}>
                                Premium
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold sm:mb-10">
                        <Link href="/market">
                            <div className="lg:pl-14 pl-4 cursor-pointer" onClick={() => setRoute('chat')}>
                                Chat box
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold sm:mb-10">
                        <Link href="/market">
                            <div className="lg:pl-14 pl-4 cursor-pointer" onClick={() => setRoute('settings')}>
                                Settings
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
