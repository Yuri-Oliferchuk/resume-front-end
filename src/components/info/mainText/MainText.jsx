import style from './MainText.module.css';
import Parser from 'html-react-parser';

const MainText = (props) => {
  return (
    <div className={style.text}>
      <div className={style.name}>
        {Parser(props.name)}
      </div>
      <div className={style.profession}>
        {Parser(props.profession)}
      </div>
      <hr />
      {Parser(props.mainText)}
    </div>
  )
}

export default MainText;