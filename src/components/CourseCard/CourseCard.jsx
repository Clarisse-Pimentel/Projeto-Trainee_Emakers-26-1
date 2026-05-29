import style from "./CourseCard.module.css";
import { useNavigate } from "react-router-dom";
import Play from "../../assets/play.png"; 

const CourseCard = ({ image, title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={image} alt={title} />
        <div className={style.playOverlay}>
          <img className={style.play} src={Play} alt="Play" />
        </div>
      </div>
      <div className={style.body}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <span className={style.link} onClick={() => navigate(route)}>
          Ver Curso de {title} →
        </span>
      </div>
    </div>
  );
};

export default CourseCard;