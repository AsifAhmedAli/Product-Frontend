import Image from 'next/image';
import styles from '../../pages/market/Market.module.css';

export default function Card() {
    return (
        <div className={`${styles.market_card} mt-4 text-white rounded-sm overflow-hidden rounded`}>
            <div className="px-2 bg-white">
                <Image src="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="not found" width="100%" height="80%" layout="responsive" objectFit="contain" />
            </div>
            <h1 className="my-2 sm:w-2/3 w-full sm:px-0 px-2 text-lg font_raleway">Earn by watching Youtube video</h1>
        </div>
    )
}


