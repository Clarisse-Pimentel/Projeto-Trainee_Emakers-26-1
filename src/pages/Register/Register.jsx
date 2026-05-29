import style from "../Auth/Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo-plataforma.png";
import Contact from "../../assets/contact.png";

const Registrar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, email, cpf, senha, confirmarSenha } = formData;
    if (!nome || !email || !cpf || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("Senhas diferentes.");
      return;
    }
    navigate("/");
  }

  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="" />
      <button onClick={() => navigate("/login")} className={style.register}>
        Fazer Login
      </button>
      <div className={`${style.box} ${style.registerBox}`}>
        <div className={`${style.header} ${style.registerHeader}`}>
          <h1 className={style.title}> 
            Invista no seu sucesso! 
        </h1>
        <span className={style.subtitle}>
          Crie sua conta agora e tenha acesso a cursos exclusivos, desenvolvidos por <br />
          especialistas, para você dominar as habilidades mais requisitadas do mercado. <br />
          Invista no seu futuro e aprenda no seu ritmo, com conteúdo de qualidade e <br />
          atualizado. Não perca tempo, o futuro da tecnologia espera por você!
        </span>
        </div>
        <form 
          className={`${style.form} ${style.registerForm}`} 
          onSubmit={handleSubmit}>
          <div className={style.field}>
            <label className={style.label}>Nome do usuário</label>
            <input
              type="text"
              className={style.input}
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Endereço de e-mail</label>
            <input
              type="email"
              className={style.input}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>CPF</label>
            <input
              type="text"
              className={style.input}
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Senha</label>
            <input
              type="password"
              className={style.input}
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Confirmação de Senha</label>
            <input
              type="password"
              className={style.input}
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
            />
          </div>
          <div className={style.actions}>
            <button onClick={() => navigate("/login")} type="submit" className={style.acess}>
              Cadastrar
            </button>
            <button onClick={() => navigate("/")} type="button" className={style.cancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <button onClick={() => navigate("/contact")} className={style.contato}>
        <img className={style.contact} src={Contact} alt="" />
      </button>
    </div>
  );
};

export default Registrar;
