import styles from './Market.module.css';
import Navbar from '../../components/market/Navbar';
import Sidebar from '../../components/market/Sidebar';
import { useState } from 'react';
import Free from '../../components/market/Free';

export default function index() {
    const [route, setRoute] = useState('free');
    return (
        <main id={`${styles.market}`} className="h-screen overflow-hidden relative">
            <Navbar />
            <div className={`${styles.custom_scroll} container mx-auto pl-4 pr-0 sm:px-4 mt-8 h-full overflow-auto relative z-50`}>
                <div className={`grid sm:grid-cols-5 grid-cols-1`}>
                    <Sidebar setRoute={setRoute} route={route} />

                    {(() => {
                        switch (route) {
                            case 'free':
                                return <Free />
                            case 'premium':
                                return <div>something</div>
                            case 'chat':
                                return <div>Chatbox here</div>
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
