import React, {useState, useEffect} from 'react';
import s from './Status.module.css';

const StatusHooks = (props) =>{
    let [editMode, toggleEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);
    const toggleEdit = () =>{
        editMode?toggleEditMode(false):toggleEditMode(true);
        if (!editMode){
            props.updateUserStatusThunk(status)
        };
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
        
    };
    return(
            <div>
                {editMode?
                <div>
                    <textarea  onChange={onStatusChange}  onBlur={toggleEdit}   autoFocus={true}  className={s.input_area} value = {status}/>
                </div>:
                <div onClick={toggleEdit} className={s.status_area} >
                   {props.status}
                </div>}
                
               
            </div>
        );
    
};

export default StatusHooks;