import style from "./AboutUs.module.css";
import Emakers from "../../assets/logo-emakers.png";
import Ufla from "../../assets/logo-ufla.png";

const HistorySection = () => {
  return (
    <div className={style.historySection}>
      <div className={style.logos}>
        <img className={style.logoEmakers} src={Emakers} alt="Emakers JR" />
        <img className={style.logoUfla} src={Ufla} alt="UFLA" />
      </div>
      <div className={style.historyContent}>
        <h3>Nossa História</h3>
        <p>
          A Mindemy nasceu com o propósito de tornar o aprendizado acessível e prático para todos. 
          Criamos uma plataforma que oferece cursos nas áreas mais promissoras da tecnologia, com foco 
          em qualidade e atualidade. Hoje, ajudamos milhares de pessoas no Brasil a se capacitarem e 
          conquistarem novas oportunidades no mercado. A Mindemy é o lugar onde você investe no seu futuro
          primora suas habilidades e alcança o sucesso. Venha para a Mindemy e comece a transformar sua vida 
          profissional hoje mesmo!
        </p>
      </div>
    </div>
  );
};

export default HistorySection;