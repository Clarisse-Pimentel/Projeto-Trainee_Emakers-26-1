import style from "./NavBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-plataforma.png";
import Search from "../../assets/search.png";
import Shop from "../../assets/shop.png";
import User from "../../assets/user.png";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <img
          className={style.menu}
          src={Menu}
          alt="Menu"
          onClick={() => setMenuOpen(true)}
        />
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
      {menuOpen && (
        <div className={style.overlay}>
          <button
            className={style.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            <img src={Close} alt="Fechar" />
          </button>
          <p className={style.overlayTitle}>MINDEMY</p>
          <ul className={style.overlayLinks}>
            <li>Perfil</li>
            <li>Ensine na Mindemy</li>
            <li>Baixe o aplicativo</li>
            <li onClick={() => { navigate("/aboutUs"); setMenuOpen(false); }}>Quem somos</li>
            <li onClick={() => { navigate("/contact"); setMenuOpen(false); }}>Fale conosco</li>
          </ul>
          <div className={style.overlaySearch}>
            <img src={Search} alt="" />
            <input type="text" placeholder="Pesquisar por qualquer coisa" />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;