import { Link } from "react-router-dom"
import styles from './styles.module.scss'
import Article from "shared/ui/Article/Article";
import { FontWeight } from "app/types/styles";

const MainPage = () => {
  return (
    <div className={styles.main__page}>

      <Article fontWeight={FontWeight.Bold} fontSize={300} noSelect>
        Morozov Kirill
      </Article>

      <Article fontWeight={FontWeight.SemiBold} noWrap fontSize={25} noSelect>
        Front-end developer
      </Article>

      <div style={{position: "absolute", top: 30, right: 30, width: 100, textAlign: "right"}}>
        <Article fontWeight={FontWeight.Regular} fontSize={12} noSelect>
          *Put your mouse on emoji
        </Article>
      </div>

    </div>
  )
}

export default MainPage;

