import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Welcome from './Welcome';
import styles from '../../pages/dashboard/Dashboard.module.css';

export default function DashboardBars({ children }) {
    const [route, setRoute] = useState('dashboard');
    const [toggleSidebar, setToggleSidebar] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 640px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 640px)").addEventListener('change', e => {
            setToggleSidebar(e.matches);
        });
    }, [])

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar setRoute={setRoute} route={route} toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <div className={`${styles.content}`}>
                <Welcome />
                {children}
            </div>
        </div>
    )
}
