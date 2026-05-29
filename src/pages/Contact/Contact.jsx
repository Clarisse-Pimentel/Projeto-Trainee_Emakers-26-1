import style from "./Contact.module.css";
import Busca from "../../assets/search.png";
import Usuario from "../../assets/telefone.png";
import Carrinho from "../../assets/carrinho.png";
import Livro from "../../assets/livro.png";
import Estrela from "../../assets/estrela.png";
import Navbar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Contact = () => {
  return (
    <div className={style.page}>
      <Navbar />
      <main className={style.main}>
        <h1 className={style.title}>Como podemos ajudar?</h1>
        <div className={style.box}>
          <img className={style.search} src={Busca} alt=""/>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Exemplo: Como saber o curso ideal para mim?"
          />
        </div>
        <p className={style.popular}>
           <span className={style.popularLabel}>Popular:</span>{" "}
            <span>Como ver os meus cursos</span>,{" "}
            <span>Como acessar meus certificados</span>,{" "}
            <span>Sistema de reembolso</span>
        </p>
        <h2 className={style.subtitle}>Assuntos</h2>
        <div className={style.grid}>
          <div className={style.card}>
            <img src={Usuario} alt="" className={style.icon} />
            <ul className={style.list}>
              <li><span>Fale com nosso suporte</span></li>
              <li><span>Fale com nossos professores</span></li>
              <li><span>Dúvidas frequentes</span></li>
              <li><span>SAC</span></li>
            </ul>
          </div>
          <div className={style.card}>
            <img src={Carrinho} alt="" className={style.icon} />
            <ul className={style.list}>
              <li><span>Adquirir novos cursos</span></li>
              <li><span>Meu carrinho</span></li>
              <li><span>Ver meus cursos</span></li>
              <li><span>Meus Certificados</span></li>
            </ul>
          </div>
          <div className={style.card}>
            <img src={Livro} alt="" className={style.icon} />
            <ul className={style.list}>
              <li><span>Falar com professores</span></li>
              <li><span>Materiais gratuitos</span></li>
              <li><span>Biblioteca Mindemy®</span></li>
              <li><span>Quero ser um professor</span></li>
              <li><span>Avaliações acadêmicas</span></li>
            </ul>
          </div>
          <div className={style.card}>
            <img src={Estrela} alt="" className={style.icon} />
            <ul className={style.list}>
              <li><span>Avaliar um curso</span></li>
              <li><span>Minhas avaliações</span></li>
              <li><span>Avaliações da comunidade</span></li>
              <li><span>Cursos mais avaliados</span></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;