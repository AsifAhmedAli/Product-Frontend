import styles from '../../pages/dashboard/Dashboard.module.css';

export default function Welcome() {
    return (
        <div className={`${styles.welcome} primary-linear-gradient relative z-40 flex items-center justify-center md:justify-between text-white rounded-lg px-8 mt-14 sm:py-4 py-8`}>
            <div className="text-center my-4">
                <h1 className="capitalize md:text-3xl font-bold text-2xl">Hello Awais</h1>
                <p className="mt-2">Ready to start your investment !</p>
            </div>
            <div className="bg-black rounded-2xl px-4 py-1 flex items-center justify-center text-2xl">
                <i className="fas fa-plus-circle pr-4"></i>
                <h1 className="pr-4">99,999</h1>
                <i className="fas fa-star text-yellow-400"></i>
            </div>
        </div>
    )
}
