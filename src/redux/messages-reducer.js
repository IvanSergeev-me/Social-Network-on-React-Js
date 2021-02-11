const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_DIALOG = "ADD-DIALOG";

let initialState = {
    messageData:[
        {id:"1",text:"Я гуль", sender_id:"1", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
        {id:"2",text:"Ghowahdoawodoawij", sender_id:"2", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
        {id:"3",text:"РЕАКТ ЖЫ ЭС", sender_id:"3", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
        {id:"4",text:"Я гуль", sender_id:"4", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
        {id:"5",text:"Я гуль", sender_id:"5", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
        {id:"6",text:"Я гуль", sender_id:"6", sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", sender_name:"Канеки Кен", send_time:"12:00"},
    ],
    
    dialogData:[
        {name: "Макс", user_id: "1"},
        {name: "Кирилл", user_id: "2"},
        {name: "Саня", user_id: "3"},
        {name: "Володя", user_id: "4"},
    ],
    newMessageContent:""
};
const messagesReducer = (state = initialState, action ) =>{
    let stateLocal = {...state};
    switch (action.type){
        case ADD_MESSAGE:
            let messageContent = stateLocal.newMessageContent;
            if (messageContent!=""){
                let newMessage = {
                    id:"7",
                    text:messageContent,
                    sender_id:"1", 
                    sender_avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", 
                    sender_name:"Канеки Кен", 
                    send_time:"12:00"
                };
                stateLocal.messageData = [...state.messageData];
                stateLocal.messageData.push(newMessage);
            };
            stateLocal.newMessageContent = "";
            return stateLocal;
        case UPDATE_MESSAGE_TEXT:
            stateLocal.newMessageContent = action.messageContent;
            return stateLocal;
        case ADD_DIALOG:
            stateLocal.dialogData = [...state.dialogData];
            return stateLocal;
        default: return stateLocal; 
    };
    
};
export const onNewMessageChangeActionCreator = (messageContent) =>({type:UPDATE_MESSAGE_TEXT, messageContent:messageContent});
export const addMessageActionCreator = () => ({type:ADD_MESSAGE});
export default messagesReducer;