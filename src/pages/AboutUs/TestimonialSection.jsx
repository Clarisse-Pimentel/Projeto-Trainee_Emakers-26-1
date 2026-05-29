import style from "./AboutUs.module.css";

const TestimonialSection = () => {
  return (
    <div className={style.testiomonialSection}>
      <div className={style.testimonialGrid}>
        <div className={style.testimonialCard}>
          <span className={style.mark} aria-hidden="true">❝</span>
          <p>
            A Mindemy é ideal para nós. A equipe deles escolhe cursos novos e atualizados no marketplace para disponibilizar aos colaboradores, mantendo sempre o aprendizado alinhado com as necessidades do mercado.
            </p>
          <h4>André Ulhoa</h4>
          <p className={style.role}>Gerente de Desenvolvimento de Talentos</p>
          <a href="#case1">Leia o estudo de caso da NovaTech</a>
        </div>
        <div className={style.testimonialCard}>
          <span className={style.mark} aria-hidden="true">❝</span>
          <p>
            Em geral, foi um grande sucesso. Eu costumava ouvir elogios sobre como a plataforma era eficaz e transformadora para os funcionários.  
          </p>
          <h4>Lorenzo Ozório</h4>
          <p className={style.role}>Gerente de Treinamento Corporativo</p>
          <a href="#case2">Leia o estudo de caso da Global Systems</a>
        </div>
        <div className={style.testimonialCard}>
          <span className={style.mark} aria-hidden="true">❝</span>
          <p>
            A Mindemy atende às necessidades da empresa de forma rápida e eficiente. Realmente a melhor solução para o desenvolvimento de nossos colaboradores e a evolução de suas carreiras.  
          </p>
          <h4>Robson Leris</h4>
          <p className={style.role}>Gerente de Desenvolvimento de Talentos</p>
          <a href="#case3">Leia o estudo de caso da TecnoGlobal</a>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
