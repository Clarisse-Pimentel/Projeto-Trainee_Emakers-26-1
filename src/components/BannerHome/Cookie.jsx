import style from "./BannerHome.module.css";
import CookieImage from "../../assets/cookie.png";
import { useState } from "react";

const Cookie = () => {
  const [visible, setVisible] = useState(true);
  if(!visible) {
    return null;
  }

  return (
    <div className={style.token}>
        <img className={style.cookie} src={CookieImage} />
        <div>
          <span  className={style.message}>Usamos cookies na entrega dos nossos serviços</span> <br />  
          <span className={style.show}>Saiba mais</span>
        </div>
        <button className={style.reject} onClick={() => setVisible(false)}>Reject</button>
        <button className={style.accept}onClick={() => setVisible(false)}>Ok</button>
    </div>
  )
}

export default Cookie
