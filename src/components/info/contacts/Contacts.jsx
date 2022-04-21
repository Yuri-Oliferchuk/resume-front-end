import React from 'react';
import style from './Contacts.module.css';
import Parser from 'html-react-parser';

const Contacts = (props) => {
  return (
      <div className={style.contacts}>
        {Parser(props.contacts)}
      </div>
  );
}

export default Contacts;