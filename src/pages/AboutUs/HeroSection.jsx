import style from "./AboutUs.module.css";
import Estudante from "../../assets/estudante-roxo.png";


const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      <h1 className={style.title}>Sobre Nós</h1>
      <p className={style.subtitle}>O lugar onde tudo começa e os sonhos ganham vida.</p>
      <div className={style.imagem}>
          <img className={style.estudante} src={Estudante} alt="" />
      </div>
      <div className={style.comentario}>
        <p>Envie um comentário</p>
      </div>
      <div className={style.chamada}>
        <p>Descubra as novidades mais recentes da nossa empresa!</p>
      </div>
    </div>
  )
}

export default HeroSection
