import { useState } from "react";
import style from "./CoursesCarousel.module.css";
import CourseCard from "../CourseCard/CourseCard.jsx";

import WebImg from "../../assets/web.jpg";
import DadosImg from "../../assets/dados.jpg";
import DesignImg from "../../assets/design.jpg";

const courses = [
  {
    image: WebImg,
    title: "Desenvolvimento Web",
    description: "Aprenda desenvolvimento web do básico ao avançado com HTML, CSS, JavaScript, React e Node.js, e prepare-se para o mercado.",
    route: "/curso/web",
  },
  {
    image: DadosImg,
    title: "Ciência de Dados",
    description: "Domine a análise de dados com Python, SQL e machine learning. Transforme dados em decisões estratégicas e prepare-se para uma carreira promissora.",
    route: "/curso/dados",
  },
  {
    image: DesignImg,
    title: "Design Gráfico",
    description: "Desperte sua criatividade com este curso! Aprenda a usar ferramentas como Photoshop, Illustrator e Canva para criar designs profissionais, como logotipos, banners e layouts.",
    route: "/curso/design",
  },
];

const CoursesCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? courses.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === courses.length - 1 ? 0 : c + 1));

  return (
    <section className={style.section}>
      <p className={style.subtitle}>Tudo o que você precisa, exatamente onde você precisa.</p>
      <h2 className={style.heading}>Conheça nossos cursos</h2>
      <div className={style.track}>
        <button className={style.btn}>‹</button>
          <div className={style.grid}>
          {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
          ))}
          </div>
        <button className={style.btn}>›</button>
      </div>
      <div className={style.slider}>
        <button className={style.btn} onClick={prev}>‹</button>
        <div className={style.slide}>
          <CourseCard {...courses[current]} />
        </div>
        <button className={style.btn} onClick={next}>›</button>
      </div>

      <button className={style.allCourses}>TODOS OS CURSOS</button>
    </section>
  );
};

export default CoursesCarousel;