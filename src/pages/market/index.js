import styles from './Market.module.css';
import Navbar from '../../components/market/Navbar';
import Card from '../../components/market/Card';
import Sidebar from '../../components/market/Sidebar';
import { useState } from 'react';

export default function index() {
    const [route, setRoute] = useState('free');
    return (
        <main id={`${styles.market}`} className="h-screen overflow-hidden relative">
            <Navbar />
            <div className={`${styles.custom_scroll} container mx-auto pl-4 pr-0 sm:px-4 mt-8 h-full overflow-auto relative z-50`}>
                <div className={`grid sm:grid-cols-4 grid-cols-1 gap-4`}>
                    <Sidebar setRoute={setRoute} route={route} />

                    {(() => {
                        switch (route) {
                            case 'free':
                                return <div className={`col-span-3 text-white pr-4`}>
                                    <div className={`${styles.welcome} sm:px-14 px-4 rounded-2xl bg-red-500`}>
                                        <h1 className="capitalize md:text-4xl font-bold text-2xl">Hello Awais</h1>
                                        <div className="bg-black rounded-2xl px-4 py-1 flex items-center justify-center text-2xl">
                                            <i className="fas fa-plus-circle pr-4"></i>
                                            <h1 className="pr-4">99,999</h1>
                                            <i className="fas fa-star text-yellow-400"></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-8 items-center justify-center pb-36 pt-4">
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            case 'premium':
                                return <div>premium fo</div>
                            case 'chat':
                                return <div>chat box</div>
                            case 'settings':
                                return <div>settings</div>
                            default:
                                return <div>default</div>
                        }
                    })()}

                </div>
            </div>
            <div className={`${styles.blur_circle_1} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_2} z-10 rounded-full`}></div>
        </main>
    )
}
