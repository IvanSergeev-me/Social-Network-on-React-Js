import React from 'react';
import s from '../../ProfileInfo.module.css';

const Contact = (props) =>{
    let rawContacts = props.contacts;
    return(
        <div className={s.contacts}>
            {Object.keys(rawContacts).map(contact=>{
                return <ContactBrick key={contact} contactTitle={contact} contactValue={rawContacts[contact]}/>
            })}
        </div>
    )
}
export default Contact;

const ContactBrick = ({contactTitle, contactValue}) =>{
    return(
        <div className={s.contacts__contactBrick}>
            <span className={s.contactBrick__title}>{contactTitle}:</span>
            <span className={s.contactBrick__value}>{contactValue}</span>
        </div>
    )
}