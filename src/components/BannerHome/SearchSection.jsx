import SearchBar from "../../assets/search.png";
import style from "./BannerHome.module.css";

const SearchSection = () => {
  return (
    <div className={style.searchBar}>
      <img className={style.look} src={SearchBar}></img>
        Pesquisar por algum curso
    </div>
  )
}

export default SearchSection
