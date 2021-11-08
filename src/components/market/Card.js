import Image from 'next/image';
import styles from '../../pages/market/Market.module.css';

export default function Card() {
    return (
        <div className={`${styles.market_card} mt-4 bg-white text-black rounded-sm overflow-hidden rounded`}>
            <div className="p-2">
                <Image src="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="not found" width={320} height={240} />
                <p className="py-4 px-2 text-left description">
                    Leverage agile frameworks to provide a robust
                    synopsis for high level overviews.</p>
            </div>
            <button className={`text-white hover:text-gray-800 font-bold text-center w-full text-center py-4 hover:text-white transition-colors ${styles.market_card_btn}`}>
                Go to Store
            </button>
        </div>
    )
}


