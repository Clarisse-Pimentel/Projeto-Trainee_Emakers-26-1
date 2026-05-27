import style from "./NavBar.module.css";
import Logo from "../../assets/logo-plataforma.png";
import Search from "../../assets/search.png"
import Shop from "../../assets/shop.png";
import User from "../../assets/user.png";

const NavBar = () => {
  return (
    <nav className={style.container}>
        <img className={style.logo} src={Logo} alt="" />
        <p className={style.title}>MINDEMY</p>
          <div className={style.rightSide}>
            <div className={style.content}>
              <img className={style.search} src={Search} alt="" />
              Pesquisar por qualquer coisa
            </div>
            <img className={style.shop} src={Shop} alt="" />
            <button>
              <img src={User} alt="" />
            </button>
          </div>
    </nav>
  )
}

export default NavBar
