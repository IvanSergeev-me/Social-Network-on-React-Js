import React from 'react';
import s from './Message.module.css';

const Message = (props) =>{
    return(
            <div className={s.message}>
                <div className={s.sender_img}>
                    <img src={props.sender_avatar} alt=""/>
                </div>
                <div className={s.msg_content}>
                    <div className={s.msg_info}>
                        <div className={s.sender_name}>{props.sender_name}</div>
                        <div className={s.send_time}>{props.send_time}</div>
                    </div>
                    <div className={s.msg_text}>
                        {props.text}
                    </div>
                </div>
            </div>
    );
};

export default Message;