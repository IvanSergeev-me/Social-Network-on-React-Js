const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const messagesReducer = (state, action ) =>{
    switch (action.type){
        case ADD_MESSAGE:
            let messageContent = state.newMessageContent;
            if (messageContent!=""){
                let newMessage = {
                    id:"1",
                    text:messageContent,
                    sender_id:"1", 
                    sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", 
                    sender_name:"Канеки Кен", 
                    send_time:"12:00"
                };
                state.messageData.push(newMessage);
            };
            state.newMessageContent = "";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageContent = action.messageContent;
            return state;
        default: return state; 
    };
    
};
export const onNewMessageChangeActionCreator = (messageContent) =>({type:UPDATE_MESSAGE_TEXT, messageContent:messageContent});
export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export default messagesReducer;