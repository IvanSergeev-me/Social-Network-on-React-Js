import React from 'react';
import s from './Status.module.css';

//Эта компонента была написана без использования хуков
class Status extends React.Component{
    constructor(props) {
        super(props);
    };
    toggleEdit = () =>{
        //Запрос setState асинхронен
        this.setState({
            editMode: this.state.editMode?this.state.editMode=false:this.state.editMode=true
        });
        if (!this.state.editMode){
            this.props.updateUserStatusThunk(this.state.status)
        };
    };
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        });
        
    };
    state = {
        editMode:false,
        status:this.props.status
    };
    componentDidUpdate(prevProps){
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            });
        };
    };
    render(){
    return(
            <div>
                {this.state.editMode?
                <div>
                    <textarea onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleEdit} className={s.input_area} value={this.state.status}/>
                </div>:
                <div className={s.status_area} onClick={this.toggleEdit}>
                    {this.state.status}
                </div>}
                
               
            </div>
        );
    };
};

export default Status;