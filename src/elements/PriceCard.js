import HomeBtn from './HomeBtn';
import styles from '../styles/Home.module.css';

export default function PriceCard({ five, basic }) {
    return (
        <div className={`${styles.pricing_card} ${styles.section_gradient} rounded-3xl flex flex-col items-center pb-4 z-50`}>
            <p className="pt-12 pb-10 capitalize">{basic && 'basic' || "free"}</p>
            <h1 className="pb-10 text-6xl font-bold tracking-wide"><span className="font_raleway">Rs</span>{five && 500 || 0}</h1>
            <p className="text-center px-8 pb-10">Lorem Ipsum is simply dummy text of typesetting, remaining essentially unchanged. It was popularised in the 1960 with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <HomeBtn white full>Purchase</HomeBtn>
        </div>
    )
}
