import HomeBtn from '../../elements/HomeBtn';
import styles from '../../styles/Home.module.css';

export default function About() {
    return (
        <article className={` mt-10 mb-20`}>
            <div className={`${styles.section_gradient} container text-white mx-auto py-10 px-8`}>
                <div className="flex items-center sm:justify-between justify-center flex-wrap">
                    <h1 className="text-6xl capitalize font-bold font_raleway">About us</h1>
                    <div className="sm:w-1/2 w-full sm:px-0 px-4 py-8 sm:py-0 text-center sm:text-left">
                        <p className="mb-8">Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            Iterative approaches to corporate strategy foster collaborative thinking to further
                            the overall value proposition.</p>
                        <HomeBtn>Learn More</HomeBtn>
                    </div>
                </div>
            </div>
        </article>
    )
}
