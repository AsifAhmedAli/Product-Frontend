// import HomeBtn from '../../elements/HomeBtn';
// import styles from '../../styles/Home.module.css';

import HomeBtn from "../../elements/HomeBtn"

// export default function About() {
//     return (
//         <article className={` mt-10 mb-20`}>
//             <div className={`${styles.section_gradient} container text-white mx-auto py-10 px-8`}>
//                 <div className="flex items-center sm:justify-between justify-center flex-wrap">
//                     <h1 className="text-6xl capitalize font-bold font_raleway">About us</h1>
//                     <div className="sm:w-1/2 w-full sm:px-0 px-4 py-8 sm:py-0 text-center sm:text-left">
//                         <p className="mb-8">Leverage agile frameworks to provide a robust synopsis for high level overviews.
//                             Iterative approaches to corporate strategy foster collaborative thinking to further
//                             the overall value proposition.</p>
//                         <HomeBtn>Learn More</HomeBtn>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     )
// }
function About() {
  return (
    <div className="about my-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 px-10 py-6 gap-4">
        {/* grid */}
        <div className="flex flex-col items-center justify-between">
          <p className="textHeading mb-4">About Kamaobay</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
        <div className="grid grid-cols-1 my-auto lg:grid-cols-3 gap-4 col-span-2">
          <input
            className="aboutInput"
            type="text"
            placeholder="Name"
            name=""
            id=""
          />
          <input
            className="aboutInput"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
          <div className="w-40 h-11 rounded-full">
            <HomeBtn background="white" text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
