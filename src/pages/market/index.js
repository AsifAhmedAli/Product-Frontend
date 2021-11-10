import styles from './Market.module.css';
import Navbar from '../../components/market/Navbar';
import Sidebar from '../../components/market/Sidebar';
import { useState } from 'react';
import Free from '../../components/market/Free';
import Welcome from '../../components/market/Welcome';

export default function index() {
    const [route, setRoute] = useState('free');
    return (
        <main id={`${styles.market}`} className="h-screen relative">
            <Navbar />
            <Sidebar setRoute={setRoute} route={route} />
            <div className={`${styles.content}`}>
                <Welcome />
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

            {/* <div className={`${styles.blur_circle_1} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_2} z-10 rounded-full`}></div> */}

        </main>
    )
}
