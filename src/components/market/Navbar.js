import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto px-4 relative z-50">
                <div className="flex items-center justify-between flex-wrap">
                    <div>
                        <Image src='/logo.png' alt="MEXIL" width={120} height={60} />
                    </div>
                    <div className="icons">
                        <Link href="/front">
                            <i class="fas fa-wallet text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/front">
                            <i class="fas fa-bell text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                        <Link href="/front">
                            <i class="fas fa-user-circle text-white mr-10 cursor-pointer hover:text-black transition-colors"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
