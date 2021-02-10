const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

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