// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../../styles/Home.module.css';

// export default function Footer() {
//     return (
//         <footer className={`${styles.section_gradient} px-4 text-white py-10`}>
//             <div className="container mx-auto flex flex-col items-center justify-center">
//                 <div className="my-2">
//                     <Image src='/logo.png' alt="MEXIL" width={120} height={60} />
//                 </div>
//                 <div className="flex items-center justify-center mb-8 flex-wrap">
//                     <div className="mr-4 hover:text-orange-900 transition-colors">
//                         <Link href="/home">Home</Link>
//                     </div>
//                     <div className="mr-4 hover:text-orange-900 transition-colors">

//                         <Link href="/about">About</Link>
//                     </div>

//                     <div className="mr-4 hover:text-orange-900 transition-colors">
//                         <Link href="/what">What we do</Link>
//                     </div>

//                     <div className="mr-4 hover:text-orange-900 transition-colors">
//                         <Link href="/earn">How to earn</Link>
//                     </div>

//                     <div className="mr-4 hover:text-orange-900 transition-colors">
//                         <Link href="/price">Pricing</Link>
//                     </div>
//                 </div>
//                 <hr className="w-full mb-8" />
//                 <h5>Copyrights (C) 2021</h5>
//             </div>
//         </footer>
//     )
// }
function Footer() {
  return (
    <div className="textColorBlue">
      <div className="flex flex-col items-center border-b-2 border-blue-900">
        <img className="w-64 mb-4" src="/assets/logo.png" alt="logo" />
        <p>1066 Budapest, Zich, Jen Stree 02,</p>
        <p>Phone number: +92 081 205 02, Email:</p>
        <p>kamaobay@outlook.com</p>
        <div className="flex items-center justify-between w-24 my-4 text-2xl">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-instagram"></i>
        </div>

      </div>
        <p className="my-4 text-center">All rights reserved by © maxilsoftwaresoluton</p>
    </div>
  )
}

export default Footer
