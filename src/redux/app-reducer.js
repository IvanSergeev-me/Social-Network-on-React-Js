import {getAuthorisedThunk} from './auth-reducer';

const SET_INIT = "app-reducer/SET_INIT";

let initialState = {
    initialised:false
};
const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_INIT:
            
            return {
                ...state,
                initialised:true
            };
        default: return state;
    };
};

export const setIniatialised = () => ({type:SET_INIT});
export const  initialize = () => async (dispatch) =>{
        let authoriseResult = dispatch(getAuthorisedThunk());
        Promise.all([authoriseResult]).then(()=>{
            dispatch(setIniatialised())
        });
        
    };
export default appReducer;
