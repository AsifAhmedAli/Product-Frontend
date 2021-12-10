import Image from 'next/image';
import styles from '../../pages/dashboard/Dashboard.module.css';

export default function Card({value, stars}) {
    return (
        // <div className={`${styles.market_card} mt-4 text-white rounded-sm overflow-hidden rounded cursor-pointer hover:shadow-lg transition-all`}>
        // <div className={`${styles.market_card} cursor-pointer hover:shadow-lg transition-all`}>
        <div
            className={`h-18 w-40 cursor-pointer hover:shadow-lg transition-all flex-shrink-0 hover:scale-105 transition transform duration-200 ease-out`}>
            {/*<div className="bg-white p-2">*/}
            <Image
                src="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="not found" width="100%" height="90%" layout="responsive" objectFit="cover"
                className="rounded-md"/>
            {/*</div>*/}
            <h1 className="my-2 text-blue-500 text-lg font_raleway text-center">{value}</h1>
            {stars && <h1 className="text-blue-500 text-lg underline font_raleway text-center">use {stars} stars</h1>}
        </div>
    )
}


