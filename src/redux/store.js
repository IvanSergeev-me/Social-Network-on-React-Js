//Этот файл представляет собой самописный Store из Redux
/*import messagesReducer from './messages-reducer.js';
import profileReducer from './profile-reducer.js';

let store = {
    _state :{
        profilePage:{
            postContent:[
                {name:"Канеки Кен",time:"20 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d03278e-72b5-4979-b3ff-f542a56a6e5f/dn9pzl-e4bb517f-527a-4a4a-8395-ab235fc0c98f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmQwMzI3OGUtNzJiNS00OTc5LWIzZmYtZjU0MmE1NmE2ZTVmXC9kbjlwemwtZTRiYjUxN2YtNTI3YS00YTRhLTgzOTUtYWIyMzVmYzBjOThmLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.gSjxDL0ufG_D9nDilby9y2aAc9_TD--u3Zh-4Lf5JKA",content:"Я- Гуль"},
                {name:"Канеки Кен",time:"21 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://wallpaperstock.net/wallpapers/thumbs1/10395.jpg",content:"Лелелелт ми дай"},
                {name:"Канеки Кен",time:"22 минут назад", avatar:"https://i1.sndcdn.com/avatars-000649708704-q87cpn-t500x500.jpg", picture:"https://images.freeimages.com/images/small-previews/904/blue-1185044.jpg",content:"Айм э пойсон рейн ви вонт вулд сурвайв"},
            ],
            newPostContent:""
        },
        messagesPage:{
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
        }
    },
    _renderTree(){},
    
    render_(observer){this._renderTree = observer},
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._renderTree(this._state);
    }
};
export default store;
window.store = store;
*/