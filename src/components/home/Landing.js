import styles from '../../styles/Home.module.css';
import HomeBtn from '../../elements/HomeBtn'

export default function Landing() {
    return (
        <section className="py-14 md:py-14 lg:pt-0 lg:pb-24 h-auto sm:pr-0 relative z-40">
            <div className="w-full custom_container mx-auto relative z-50">
                <div className="grid lg:grid-cols-2 sm:items-center sm:justify-between h-auto">
                    <div className="w-full mb-16 flex flex-col justify-center text-white">
                        <h1 className="sm:text-6xl text-5xl sm:text-left my-8 font-bold">Let start <br /> earning with us</h1>
                        <p className="mb-10">Develop a website by finding a product identity that has value and
                            branding to become a characteristic of a company.</p>
                        <div className="mr-auto flex flex-wrap">
                            <div className={`mr-4 ${styles.margin_between}`}>
                                <HomeBtn white>Contact Us</HomeBtn>
                            </div>
                            <HomeBtn>Introductory Video</HomeBtn>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center relative">
                        <div className={`${styles.landing_circle} lg:w-100 lg:h-100 w-72 h-72 bg-blue-400 rounded-full z-50 opacity-40`}></div>
                        {/* Video youtube */}
                        <div className={`${styles.iframe_width_iphone} absolute w-6/7 bg-black lg:h-3/6 md:h-6/7 h-3/5 lg:top-36 top-8 rounded-3xl overflow-hidden translate-y-0 z-50`}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8FqlTslU22s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={`${styles.blur_dot_1s} z-20`}></div>
                        <div className={`${styles.blur_dot_2} z-20`}></div>
                        <div className={`${styles.blur_dot_3} z-20`}></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.blur_circle_11} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_12} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_13} z-10 rounded-full`}></div>
        </section>
    )
}
