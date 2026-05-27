import style from "./FirstSection.module.css";
import Contact from "../../assets/contact.png"
import TextSection from "./TextSection.jsx";
import SearchSection from "./SearchSection.jsx";
import ImageSection from "./ImageSection.jsx";
import Cookie from "./Cookie.jsx";

const FirstSection = () => {
  return (
    <div className={style.section}>
      <div className={style.sectionContent}>
        <TextSection />
        <SearchSection />
        <Cookie />
      </div>
      <ImageSection />
      <button className={style.contato}>
        <img className={style.contact} src={Contact}/>
      </button>
    </div>
  )
}

export default FirstSection
