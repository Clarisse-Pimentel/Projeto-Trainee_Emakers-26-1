import style from "../Auth/Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo-plataforma.png";
import Contato from "../../assets/contact.png";
import Olho from "../../assets/mostrar.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }
    navigate("/");
  }

  return (
  <div className={style.container}>
    <img className={style.logo} src={Logo} alt="" />
    <div className={style.box}>
      <div className={style.header}>
        <h1 className={style.title}>Login</h1>
        <span className={style.subtitle}>
          Digite o endereço de e-mail e a senha da sua conta Mindemy
        </span>
      </div>
      <form className={`${style.form} ${style.loginForm}`} onSubmit={handleLogin}>
        <div className={style.field}>
          <label className={style.label}>Endereço de e-mail</label>
          <input
            type="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label className={style.label}>Senha</label>
          <div className={style.passwordBox}>
            <input
              type={mostrarSenha ? "text" : "password"}
              className={style.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <img
              className={style.look}
              src={Olho}
              alt=""
              onClick={() => setMostrarSenha(!mostrarSenha)}
            />
          </div>
        </div>
        <button type="button" className={style.forgot} onClick={() => navigate("/forgotPassword")}>
          Esqueceu a senha?
        </button>
        <button type="submit" className={style.enter}>
          Entrar
        </button>
      </form>
      <button className={style.help} onClick={() => navigate("/contact")}>
        Precisa de ajuda para entrar?
      </button>
      <button className={style.register} onClick={() => navigate("/register")}>
        Cadastre-se agora
      </button>
    </div>
    <button className={style.contato} onClick={() => navigate("/contact")}>
      <img className={style.contact} src={Contato} alt="" />
    </button>
  </div>
);
};

export default Login;