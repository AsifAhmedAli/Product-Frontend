import styles from '../../pages/market/Market.module.css';

export default function Welcome() {
    return (
        <div className={`${styles.welcome} text-white sm:pr-6 sm:pl-8 px-4 rounded-tr-none sm:rounded-l-none border-b-2 border-opacity-50 sm:rounded-br-none`}>
            <h1 className="capitalize md:text-4xl font-bold text-2xl">Hello Awais</h1>
            <div className="bg-black rounded-2xl px-4 py-1 flex items-center justify-center text-2xl">
                <i className="fas fa-plus-circle pr-4"></i>
                <h1 className="pr-4">99,999</h1>
                <i className="fas fa-star text-yellow-400"></i>
            </div>
        </div>
    )
}
