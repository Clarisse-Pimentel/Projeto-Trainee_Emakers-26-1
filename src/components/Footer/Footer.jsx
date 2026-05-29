import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <a href="#">Mindemy</a>
        <a href="#">Ensine na Mindemy</a>
        <a href="#">Baixe o aplicativo</a>
        <button onClick={() => navigate("/aboutUs")}>Quem somos</button>
        <button onClick={() => navigate("/contact")}>Fale conosco</button>
      </div>
      <div className={style.right}>
        <p className={style.brand}>MINDEMY</p>
        <p className={style.slogan}>Invista no seu sucesso</p>
      </div>
    </footer>
  );
};

export default Footer;