import styles from './Dashboard.module.css';
import DashboardBars from '../../components/dashboard/DashboardBars';
import Front from '../../components/dashboard/Front';

export default function index() {
    return (
        <main id={`${styles.dashboard}`}>
            <DashboardBars>
                <Front />
            </DashboardBars>
        </main>
    )
}
