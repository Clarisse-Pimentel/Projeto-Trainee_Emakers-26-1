import style from "./BannerHome.module.css";
import { useNavigate } from "react-router-dom";
import Contact from "../../assets/contact.png"
import TextSection from "./TextSection.jsx";
import SearchSection from "./SearchSection.jsx";
import ImageSection from "./ImageSection.jsx";
import Footer from "./Footer.jsx";
import Cookie from "./Cookie.jsx";

const BannerHome = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.content}>
        <TextSection />
        <SearchSection />
        <Cookie />
      </div>
      <ImageSection />
      <button onClick={() => navigate("/contato")} className={style.contato}>
        <img className={style.contact} src={Contact}/>
      </button>
      <div className={style.fakeFooter}></div>
    </div>
  )
}

export default BannerHome
