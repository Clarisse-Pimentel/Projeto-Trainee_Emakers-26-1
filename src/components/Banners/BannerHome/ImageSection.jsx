import Gif from "../../../assets/principal.gif"
import style from "./BannerHome.module.css";

const ImageSection = () => {
  return (
    <div>
      <img className={style.gif} src={Gif} ></img>
    </div>
  )
}

export default ImageSection
