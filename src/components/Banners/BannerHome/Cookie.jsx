import CookieImage from "../../../assets/cookie.png";
import style from "./BannerHome.module.css";

const Cookie = () => {
  return (
    <div className={style.token}>
        <img className={style.cookie} src={CookieImage} />
        <div>
          <span  className={style.message}>Usamos cookies na entrega dos nossos serviços</span> <br />  
          <span className={style.show}>Saiba mais</span>
        </div>
        <button className={style.reject}>Reject</button>
        <button className={style.accept}>Ok</button>
    </div>
  )
}

export default Cookie
