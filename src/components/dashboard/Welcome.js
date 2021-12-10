import styles from '../../pages/dashboard/Dashboard.module.css';

export default function Welcome() {
    return (
        <div
            className={`${styles.welcome} bg-gradient-to-r from-blue-900 to-blue-800 relative z-40 flex items-center justify-center md:justify-between text-white rounded-lg px-8 mt-14 sm:py-4 py-8`}>
            <div className="text-center lg:text-left my-4">
                <h1 className="capitalize md:text-3xl font-bold text-2xl">Hello Awais</h1>
                <p className="mt-2">Ready to start your investment !</p>
            </div>
            <div className="flex items-center justify-between space-x-4">
                <div className="bg-black bg-opacity-20 rounded-md px-4 py-1 flex items-center justify-center text-xl space-x-2">
                    <i className="far fa-check-square"></i>
                    <h1 className="text-gray-200">Completed Tasks</h1>
                </div>
                <div className="bg-black bg-opacity-20 rounded-md px-4 py-1 flex items-center justify-center text-xl">
                    <i className="fas fa-plus-circle pr-4"></i>
                    <h1 className="pr-4 text-gray-200">99,999</h1>
                    <i className="fas fa-star text-yellow-400"></i>
                </div>
            </div>

        </div>
    )
}
