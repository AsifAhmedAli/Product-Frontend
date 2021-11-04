import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Footer() {
    return (
        <footer className={`${styles.section_gradient} px-4 text-white py-10`}>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="my-2">
                    <Image src='/logo.png' alt="MEXIL" width={120} height={60} />
                </div>
                <div className="flex items-center justify-center mb-8 flex-wrap">
                    <div className="mr-4 hover:text-orange-800">
                        <Link href="/home">Home</Link>
                    </div>
                    <div className="mr-4 hover:text-orange-800">

                        <Link href="/about">About</Link>
                    </div>

                    <div className="mr-4 hover:text-orange-800">
                        <Link href="/what">What we do</Link>
                    </div>

                    <div className="mr-4 hover:text-orange-800">
                        <Link href="/earn">How to earn</Link>
                    </div>

                    <div className="mr-4 hover:text-orange-800">
                        <Link href="/price">Pricing</Link>
                    </div>
                </div>
                <hr className="w-full mb-8" />
                <h5>Copyrights (C) 2021</h5>
            </div>
        </footer>
    )
}
