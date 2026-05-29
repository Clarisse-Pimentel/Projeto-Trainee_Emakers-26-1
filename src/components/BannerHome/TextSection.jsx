import style from "./BannerHome.module.css";

const TextSection = () => {
  return (
    <div className={style.text}>
      <div className={style.title}>
          <div className={style.firstLine}>
            <span className={style.pink}>&gt;&gt;</span>
            <span className={style.purple}>Adquira</span>
          </div>
          <span className={style.pink}>
            habilidades práticas e <br />
            transforme sua carreira <br />
            com cursos que <br />
            preparam você para o <br />
            mercado de trabalho
          </span> 
      </div>
      <div className={style.subtitle}>
        <span>Aprenda hoje, conquiste o amanhã!</span> <br />
        Invista no seu Sucesso!
      </div>
    </div>
  )
}

export default TextSection
