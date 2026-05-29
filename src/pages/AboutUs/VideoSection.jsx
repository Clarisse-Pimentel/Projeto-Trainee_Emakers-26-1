import style from "./AboutUs.module.css";
import Video from "../../assets/video.png";

const VideoSection = () => {
  return (
    <div className={style.videoSection}>
      <div className={style.videoContainer}>
        <div className={style.videoPlay}>
          <img src={Video} alt="" />
        </div>
        <div className={style.textVideo}>
          <h3>A força que existe em cada um de nós</h3>
          <p>
            Neste vídeo, você verá como a coragem e a determinação podem transformar qualquer 
            desafio em uma conquista. É um lembrete poderoso de que, mesmo diante das dificuldades, 
            somos capazes de superar limites e encontrar força onde menos esperamos. Assista e 
            inspire-se a enfrentar seus próprios obstáculos com resiliência!
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
