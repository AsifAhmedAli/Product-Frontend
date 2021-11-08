import styles from '../../pages/market/Market.module.css';
import Link from 'next/link';

export default function Sidebar({ setRoute }) {
    return (
        <div className={`${styles.sidebar} col-span-1 bg-blue-500 rounded-2xl py-14`}>
            <div className="capitalize bg-white text-primary lg:w-2/3 w-full mx-auto lg:rounded-xl rounded-none text-center py-2 font-bold mb-14">
                Select category
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold mb-10">
                        <Link href="/market">
                            <div className="md:pl-20 pl-10 cursor-pointer" onClick={() => setRoute('free')}>
                                Free
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold mb-10">
                        <Link href="/market">
                            <div className="md:pl-20 pl-10 cursor-pointer" onClick={() => setRoute('premium')}>
                                Premium
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold mb-10">
                        <Link href="/market">
                            <div className="md:pl-20 pl-10 cursor-pointer" onClick={() => setRoute('chat')}>
                                Chat box
                            </div>
                        </Link>
                    </div>
                    <div className="hover:bg-white hover:text-primary text-white w-full text-left py-2 font-bold mb-10">
                        <Link href="/market">
                            <div className="md:pl-20 pl-10 cursor-pointer" onClick={() => setRoute('settings')}>
                                Settings
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
