import FrontCard from "./FrontCard";
import {useRef} from "react";

export default function Front() {
    const cardsScrollFree = useRef(null)
    const cardsScrollPremium = useRef(null)
    const scrollRightFree = (scrollOffset) => {
        cardsScrollFree.current.scrollLeft += scrollOffset
    }
    const scrollRightPremium = (scrollOffset) => {
        cardsScrollPremium.current.scrollLeft += scrollOffset
    }

    return (
        <div className="text-blue-500 pb-14">
            <div className="flex items-center sm:justify-between mt-10 px-2 -mb-4 justify-center">
                <h1 className="text-xl font-bold sm:mr-0 mr-4">Free</h1>
                {/* <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button> */}
            </div>
            <div className="flex">
                <div ref={cardsScrollFree}
                     className="flex space-x-4 p-6 mt-8 rounded-sm overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700">
                    <FrontCard value="Youtube Video"/>
                    <FrontCard value="Ads"/>
                    <FrontCard value="Share Posts"/>
                    <FrontCard value="Share Posts"/>
                    <FrontCard value="Share Posts"/>
                    <FrontCard value="Share Posts"/>
                    <FrontCard value="Youtube Video"/>
                    <FrontCard value="Youtube Video"/>
                    <FrontCard value="Youtube Video"/>
                    <FrontCard value="Ads"/>
                </div>
                <div className="flex items-center justify-between p-6">
                    <i className="far fa-paper-plane bg-blue-300 text-blue-700 p-6 text-3xl rounded-full m-6 mb-12 cursor-pointer"
                       onClick={() => scrollRightFree(100)}></i>
                </div>
            </div>


            <div className="flex items-center sm:justify-between mt-6 px-2 -mb-4 justify-center">
                <h1 className="text-xl font-bold sm:mr-0 mr-4">Premium</h1>
                {/* <button className={`${styles.see_more} px-4 py-1 rounded-xl`}>
                    See More
                </button> */}
            </div>
            <div className="flex">
                <div ref={cardsScrollPremium}
                     className="flex space-x-4 p-6 mt-8 rounded-sm overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700">
                    <FrontCard value="Survey" stars="10"/>
                    <FrontCard value="Survey" stars="10"/>
                    <FrontCard value="Survey" stars="10"/>
                    <FrontCard value="Data Entry" stars="10"/>
                    <FrontCard value="Data Entry" stars="10"/>
                    <FrontCard value="Task Completed" stars="30"/>
                    <FrontCard value="Task Completed" stars="30"/>
                    <FrontCard value="Playing Games" stars="99"/>
                    <FrontCard value="Playing Games" stars="99"/>
                </div>
                <div className="flex items-center justify-between p-6">
                    <i className="far fa-paper-plane bg-blue-300 text-blue-700 p-6 text-3xl rounded-full m-6 mb-12 cursor-pointer"
                       onClick={() => scrollRightPremium(100)}></i>
                </div>
            </div>
        </div>
    )
}
