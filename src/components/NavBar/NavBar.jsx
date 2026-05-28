import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-plataforma.png";
import Search from "../../assets/search.png"
import Shop from "../../assets/shop.png";
import User from "../../assets/user.png";
import Menu from "../../assets/menu.png"

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className={style.container}>
      <img className={style.menu} src={Menu} />
      <img className={style.logo} src={Logo} alt="" />
      <p className={style.title}>MINDEMY</p>
      <div className={style.rightSide}>
        <div className={style.content}>
          <img className={style.search} src={Search} alt="" />
          Pesquisar por qualquer coisa
        </div>
        <img className={style.shop} src={Shop} alt="" />
        <button onClick={() => navigate("/login")}>
          <img src={User} alt="" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
