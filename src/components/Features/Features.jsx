import style from "./Features.module.css";
import IconeTreino from "../../assets/icone-treino.png";
import IconeCertificado from "../../assets/icone-certificado.png";
import IconeAnalise from "../../assets/icone-analise.png";
import IconeConteudo from "../../assets/icone-conteudo.png";
import Codigo from "../../assets/codigo.png";

const features = [
  {
    icone: IconeTreino,
    titulo: "Treinamento prático",
    descricao: "Pratique o que você aprendeu, com exercícios,simulados, testes e use a IA para aprender.",
  },
  {
    icone: IconeCertificado,
    titulo: "Certificações Qualificadas",
    descricao: "Prepare-se para receber certificações reconhecidas pelo setor. Impulsione seu currículo!",
  },
  {
    icone: IconeAnalise,
    titulo: "Análises e feedbacks",
    descricao: "Receba insights personalizadas de como está seu aprendizado, te ajudando a resolver seus maiores problemas.",
  },
  {
    icone: IconeConteudo,
    titulo: "Conteúdo personalizável",
    descricao: "Tenha trilhas personalizadas para os seus objetivos. Visualize suas metas antes de concluí-las!",
  },
];

const Features = () => {
  return (
    <section className={style.section}>
      <h2 className={style.heading}>Foque no que realmente importa</h2>
      <div className={style.content}>
        <div className={style.list}>
          {features.map((feature, index) => (
            <div key={index} className={style.card}>
              <div className={style.cardTop}>
                <img className={style.icone} src={feature.icone} alt={feature.titulo} />
                <div className={style.cardText}>
                  <span className={style.titulo}>{feature.titulo}</span>
                  <p className={style.descricao}>{feature.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.mockupWrapper}>
          <div className={style.mockupTopBar}>
            <button>−</button>
            <button>✕</button>
          </div>
          <div className={style.mockupBody}>
            <div className={style.mockupInstructions}>
              <h3>Instruções</h3>
              <h4>Teste seu conhecimento em Front-End</h4>
              <p>
                Coloque suas habilidades de Front-End à prova! Crie uma página responsiva e
                interativa usando HTML, CSS e JavaScript. Teste sua criatividade e domínio das
                tecnologias criando um layout funcional, moderno e compatível com diferentes
                dispositivos.
              </p>
              <button className={style.mockupBtn}>Iniciar Desafio</button>
            </div>
           <div className={style.mockupCode}>
              <img className={style.mockupCodeImg} src={Codigo} alt="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;