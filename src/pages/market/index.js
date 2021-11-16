import styles from './Market.module.css';
import Navbar from '../../components/market/Navbar';
import Sidebar from '../../components/market/Sidebar';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/market/Dashboard';
import Welcome from '../../components/market/Welcome';

export default function index() {
    const [route, setRoute] = useState('dashboard');
    const [toggleSidebar, setToggleSidebar] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 640px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 640px)").addEventListener('change', e => {
            setToggleSidebar(e.matches);
        });
    }, [])

    return (
        <main id={`${styles.market}`}>
            <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar setRoute={setRoute} route={route} toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <div className={`${styles.content} relative z-40`}>
                <Welcome />
                {(() => {
                    switch (route) {
                        case 'dashboard':
                            return <Dashboard />
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
            <div className={`${styles.big_circle_bg} lg:w-98 lg:h-98 w-96 h-96 bg-blue-400 rounded-full z-10`}></div>
            <div className={`${styles.blur_circle_bg} w-96 h-96 z-20 rounded-full`}></div>
            <div className={`${styles.blur_dot_1} z-30 rounded-full`}></div>
            <div className={`${styles.blur_dot_2} z-30 rounded-full`}></div>
        </main>
    )
}
