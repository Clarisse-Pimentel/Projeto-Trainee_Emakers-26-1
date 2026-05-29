import style from "./Testimonials.module.css";
import AlunoRodrigo from "../../assets/aluno-rodrigo.png";
import AlunoVictor from "../../assets/aluno-victor.png";
import AlunoLorenzo from "../../assets/aluno-lorenzo.png";

const testimonials = [
  {
    texto: "A Mindemy foi essencial na minha trajetória até o mercado de trabalho, desde o alinhamento dos meus objetivos à colheita dos frutos. Obrigado a toda a equipe!",
    foto: AlunoRodrigo,
    nome: "Rodrigo Romanhol",
    cargo: "Designer e CEO da Rod Produções",
  },
  {
    texto: "A Mindemy realmente fez diferença no meu trajeto no mundo digital, e foi uma excelente guia para criar a 7even.",
    foto: AlunoVictor,
    nome: "Victor Cabral",
    cargo: "CTO da 7even e Gestor de Tráfego",
  },
  {
    texto: "A Mindemy me deu as ferramentas necessárias para crescer. Aprendi o que precisava para o mundo real e conquistei uma promoção com confiança no meu conhecimento.",
    foto: AlunoLorenzo,
    nome: "Lorenzo Ozório",
    cargo: "Desenvolvedor Web, Diretor da Usimicro",
  },
];

const Testimonials = () => {
  return (
    <>
      <nav className={style.fakeNavbar}>
        <span>MINDEMY</span>
      </nav>
      <section className={style.section}>
        <h2 className={style.heading}>Veja o que outros alunos estão dizendo</h2>
        <hr className={style.divider} />
        <div className={style.people}>
          <div className={style.list}>
            {testimonials.map((t, index) => (
              <div key={index} className={style.card}>
                <span className={style.aspas}>"</span>
                <p className={style.texto}>{t.texto}</p>
                <div className={style.autor}>
                  <img className={style.foto} src={t.foto} alt={t.nome} />
                  <div className={style.info}>
                    <span className={style.nome}>{t.nome}</span>
                    <span className={style.cargo}>{t.cargo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;