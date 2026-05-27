import style from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import BannerHome from "../../components/Banners/BannerHome/BannerHome.jsx";

const Home = () => {
  return (
    <div>
        <NavBar />
        <BannerHome />
    </div>
  )
}

export default Home
