import Contacts from './contacts/Contacts';
import style from './Info.module.css';
import MainText from './mainText/MainText';

function Info(props) {
  return (
    <div className={style.info}>
      <div className={style.photo} >
        <img src={props.user.photoUrl} alt='I am'/>
      </div>
      <Contacts contacts={props.user.contacts} />
      <MainText mainText={props.user.text}
                name={props.user.name}
                profession={props.user.profession} />
    </div>
  );
}
export default Info;