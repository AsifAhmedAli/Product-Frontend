import Link from 'next/link';
import styles from '../../pages/dashboard/Dashboard.module.css';

export default function Navbar({ toggleSidebar, setToggleSidebar }) {
    return (
        <nav className={`${styles.navbar} z-auto`}>
            <div className="container mx-auto px-2">
                <div className="flex items-center justify-between flex-wrap py-10">
                    <div>
                        <a className="cursor-pointer pl-4 sm:pl-0" onClick={() => setToggleSidebar(!toggleSidebar)}>
                            <i className="fas fa-bars sm:text-white text-blue-500 text-lg"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <Link href="/market">
                            <i className="fas fa-wallet text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/market">
                            <i className="fas fa-bell text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/market">
                            <i className="fas fa-user-circle text-blue-500 sm:mr-10 mr-6 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
