// import PriceCard from "../../elements/PriceCard";
// import styles from '../../styles/Home.module.css';

import PricingCard from "./PricingCard"

// export default function Pricing() {
//     return (
//         <section className="text-white relative z-20 pb-24 overflow-hidden">
//             <div className="container mx-auto">
//                 <div className="text-center pb-20">
//                     <h1 className="md:text-4xl text-2xl my-4 px-2 font-bold capitalize font_raleway">Simple Pricing, All The Features</h1>
//                     <p className="text-sm mx-auto lg:w-1/2 w-full sm:px-14 px-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
//                 </div>
//                 <div className="flex gap-24 items-center justify-center flex-wrap relative">
//                     <PriceCard />
//                     <PriceCard five basic />
//                     <div className={`${styles.blur_dot_4} z-20 rounded-full`}></div>
//                     <div className={`${styles.blur_dot_5} z-20 rounded-full `}></div>
//                     <div className={`${styles.blur_dot_6} z-20 rounded-full`}></div>
//                 </div>
//             </div>
//         </section>
//     )
// }
function Pricing() {
  return (
    <div className="relative">
      <img
        className="absolute -top-64 -left-96 z-0"
        src="/assets/blob.svg"
        alt=""
      />
      <div className="relative textColorBlue mb-32">
        <div className="flex flex-col items-center justify-between">
          <div className="textHeading">
            {/* heading */}
            <p>Simple Pricing, All The Features</p>
          </div>
          <div className="m-6 mb-12 flex flex-col items-center justify-between">
            {/* subheading */}
            <p>Develop a website by ﬁnding a product identity that has value</p>
            <p>and branding to become a character of a company</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* grid */}
          <PricingCard type="Free" price="0" color="white" />
          <PricingCard type="Standard" price="50" />
          <PricingCard type="Premium" price="100" color="white" />
        </div>
      </div>
    </div>
  )
}

export default Pricing
