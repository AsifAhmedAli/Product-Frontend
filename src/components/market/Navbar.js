import Image from 'next/image';
import Link from 'next/link';
import styles from '../../pages/market/Market.module.css';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} z-40`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between flex-wrap py-4">
                    <div>
                    </div>
                    <div className="icons">
                        <Link href="/market">
                            <i className="fas fa-wallet text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/market">
                            <i className="fas fa-bell text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/market">
                            <i className="fas fa-user-circle text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
