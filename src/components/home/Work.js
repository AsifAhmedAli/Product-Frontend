import { useEffect, useState } from "react";
import HomeBtn from "../../elements/HomeBtn";
import styles from '../../styles/Home.module.css';

export default function Work() {
    const [toggleRow, setToggleRow] = useState(typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 768px)").addEventListener('change', e => {
            setToggleRow(e.matches);
        });
    }, [])
    return (
        <section className="text-white pt-16 relative z-10 pb-32">
            <div className="container mx-auto lg:px-0 px-4">
                <div className="grid lg:grid-cols-2 grid-flow-row-dense md:grid-cols-2 justify-center items-center gap-10 pb-24 relative z-20">
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" alt="What we do" />
                    <div className="text-left sm:px-4 px-0">
                        <h1 className="font_raleway text-3xl my-4 font-bold">What we do</h1>
                        <p className="my-6 text-sm">Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the companyDevelop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the companyDevelop a website by finding a product identity that has value and branding to become a characteristic of a company.
                        </p>
                        <HomeBtn>Learn More</HomeBtn>
                    </div>
                </div>
                {
                    toggleRow &&
                    <div className={`grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-10 relative z-20`}>
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" alt="What we do" />
                        <div className="text-left sm:px-4 px-0">
                            <h1 className="text-3xl my-4 z-20 font_raleway font-bold">How to earn</h1>
                            <p className="my-6 text-sm z-20">Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the companyDevelop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                            </p>
                            <HomeBtn>Learn More</HomeBtn>
                        </div>
                    </div>
                }
                {
                    !toggleRow && <div className={`grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-10 relative z-20`}>
                        <div className="text-left sm:px-4 px-0">
                            <h1 className="text-3xl my-4 z-20 font_raleway font-bold">How to earn</h1>
                            <p className="my-6 text-sm z-20">Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the companyDevelop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                            </p>
                            <HomeBtn>Learn More</HomeBtn>
                        </div>
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" alt="What we do" />
                    </div>
                }

            </div>
            <div className={`${styles.blur_circle_4} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_5} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_6} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_7} z-10 rounded-full`}></div>
            <div className={`${styles.blur_circle_8} z-10 rounded-full`}></div>
        </section >
    )
}
