
import NavBar from "../../components/NavBar/NavBar.jsx";
import BannerHome from "../../components/BannerHome/BannerHome.jsx";
import CoursesCarousel from "../../components/CoursesCarousel/CoursesCarousel.jsx";
import Features from "../../components/Features/Features.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
        <NavBar />
        <BannerHome />
        <CoursesCarousel />
        <Features />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home
