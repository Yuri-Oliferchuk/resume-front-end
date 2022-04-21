import style from './Info.module.css';

function Info(props) {
  return (
    <div className={style.info}>
      <div className={style.photo} >
        <img src={props.user.photoUrl} alt='I am'/>
      </div>
      <div className={style.contacts}>contacts</div>
      <div className={style.text}>text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text <br /> text</div>
    </div>
  );
}
export default Info;