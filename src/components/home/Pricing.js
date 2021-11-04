import PriceCard from "../../elements/PriceCard";
import styles from '../../styles/Home.module.css';

export default function Pricing() {
    return (
        <section className="text-white relative z-20 pb-24 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center pb-20">
                    <h1 className="md:text-4xl text-2xl my-4 px-2 font-bold capitalize">Simple Pricing, All The Features</h1>
                    <p className="text-sm mx-auto lg:w-1/2 w-full sm:px-14 px-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="flex gap-24 items-center justify-center flex-wrap relative">
                    <PriceCard />
                    <PriceCard five basic />
                    <div className={`${styles.blur_dot_4} z-20 rounded-full`}></div>
                    <div className={`${styles.blur_dot_5} z-20 rounded-full `}></div>
                    <div className={`${styles.blur_dot_6} z-20 rounded-full`}></div>
                </div>
            </div>
        </section>
    )
}
