import Card from "./Card";
import styles from '../../pages/dashboard/Dashboard.module.css';

export default function Front() {
    return (
        <div className={`${styles.front} text-blue-500 pb-14`}>
            <div className="flex items-center sm:justify-between mt-10 px-2 -mb-4 justify-center">
                <h1 className="text-xl font-bold sm:mr-0 mr-4">Free</h1>
                <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button>
            </div>
            <div
                className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4 items-center justify-center`}>
                <Card value="Youtube Video"/>
                <Card value="Ads"/>
                <Card value="Share Posts"/>
                <Card value="Youtube Video"/>
                <div className="hidden xl:inline flex items-center justify-between p-6 ml-4">
                    <i className="far fa-paper-plane bg-blue-300 text-blue-700 p-6 text-3xl rounded-full m-6 mb-12 cursor-pointer"></i>
                </div>
            </div>
            <div className="flex items-center sm:justify-between mt-4 px-2 -mb-4 justify-center">
                <h1 className="text-xl font-bold sm:mr-0 mr-4">Premium</h1>
                <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button>
            </div>
            <div
                className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full gap-4 items-center justify-center ${styles.custom_scroll}`}>
                <Card value="Survey" stars="10"/>
                <Card value="Data Entry" stars="10"/>
                <Card value="Task Completed" stars="30"/>
                <Card value="Playing Games" stars="99"/>
                <div className="hidden xl:inline flex items-center p-6 ml-4">
                    <i className="far fa-paper-plane bg-blue-300 text-blue-700 p-6 text-3xl rounded-full m-6 mb-16 cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}
