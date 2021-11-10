import Card from "./Card";
import styles from '../../pages/market/Market.module.css';

export default function Free() {
    return (
        <div className={`${styles.free} text-white`}>
            <div className={`px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 items-center justify-center pb-52 pt-4 ${styles.cards} ${styles.custom_scroll}`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
