import Brands from '../components/home/Brands';
import Landing from '../components/home/Landing';
import Navbar from '../components/home/Navbar';
import Work from '../components/home/Work';
// import styles from '../styles/Home.module.css';
import Pricing from '../components/home/Pricing';
import About from '../components/home/About';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <main className="backgroundColor">
      <Navbar />
      <Landing />
      <Brands />
      <Work />
      <Pricing />
      <About />
      <Footer />
    </main>
  )
}
