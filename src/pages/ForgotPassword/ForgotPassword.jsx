import style from "../Auth/Auth.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo-plataforma.png"
import Contato from "../../assets/contact.png"

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handlePassword(e) {
    e.preventDefault();
    if (!email) {
      alert("Informe seu e-mail");
      return;
    }
    navigate("/");
  }
  
  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="" />
      <div className={style.box}>
        <div className={style.header}>
          <h1 className={style.forgotTitle}>
            Redefina sua senha
          </h1>
          <span className={style.subtitle}>
            Digite o endereço de e-mail que você usa na Mindemy <br /> 
            para mandarmos um link de redefinição de senha.
          </span>
        </div>
        <form 
          className={style.form}
          onSubmit={handlePassword}>
          <label className={style.label}>
            Endereço de e-mail
          </label>
          <input 
            type="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <div className={style.redef}>
            <button className={style.email} onClick={() => navigate("/")}>
              Enviar
            </button>
            <button className={style.cancele} onClick={() => navigate("/")}>
              Cancele
            </button>
          </div>
        </form>
        <button className={style.contato} onClick={() => navigate("/contact")}>
          <img className={style.contact} src={Contato} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword
