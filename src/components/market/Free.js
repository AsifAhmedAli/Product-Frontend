import Card from "./Card";
import styles from '../../pages/market/Market.module.css';

export default function Welcome() {
    return (
        <div className={`col-span-4 text-white pr-4`}>
            <div className={`${styles.welcome} sm:px-10 px-4 rounded-2xl sm:rounded-l-none bg-red-500 border-b-2 border-opacity-50 sm:rounded-br-none`}>
                <h1 className="capitalize md:text-4xl font-bold text-2xl">Hello Awais</h1>
                <div className="bg-black rounded-2xl px-4 py-1 flex items-center justify-center text-2xl">
                    <i className="fas fa-plus-circle pr-4"></i>
                    <h1 className="pr-4">99,999</h1>
                    <i className="fas fa-star text-yellow-400"></i>
                </div>
            </div>
            <div className="px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 items-center justify-center pb-36 pt-4">
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
