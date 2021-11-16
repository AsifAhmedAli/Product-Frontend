import Card from "./Card";
import styles from '../../pages/market/Market.module.css';

export default function Dashboard() {
    return (
        <div className={`${styles.dashboard} text-white`}>
            <div className="flex items-center sm:justify-between mt-10 px-2 -mb-4 justify-center">
                <h1 className="text-2xl font-bold sm:mr-0 mr-4">Free</h1>
                <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button>
            </div>
            <div className={`px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 items-center justify-center pb-12 pt-4`}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex items-center sm:justify-between mt-4 px-2 -mb-4 justify-center">
                <h1 className="text-2xl font-bold sm:mr-0 mr-4">Premium</h1>
                <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button>
            </div>
            <div className={`px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 items-center justify-center pb-12 pt-4 ${styles.custom_scroll}`}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
