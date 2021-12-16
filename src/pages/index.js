import Brands from '../components/home/Brands';
import Landing from '../components/home/Landing';
import Navbar from '../components/home/Navbar';
import Work from '../components/home/Work';
// import styles from '../styles/Home.module.css';
import Pricing from '../components/home/Pricing';
import About from '../components/home/About';
import Footer from '../components/home/Footer';
import Earning from '../components/home/Earning';

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-5 lg:mx-auto">
      <Navbar />
      <Landing />
      {/* <Brands /> */}
      <Work />
      <Earning />
      <Pricing />
      <About />
      <Footer />
    </main>
  )
}
