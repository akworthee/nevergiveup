import * as api from "../api/userApi";

const INSERT_USER = "INSERT_USER";
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";

 export const insertAction = (data) => async(dispatch,getState) =>{
     try{

    const result = await api.insertUser(data);
    //const result = await api.insertUser(getState("users").userDetails.users[0]);
    console.log("userActionInsedrt",getState("users"));
    return dispatch({
        type: INSERT_USER,
        payload: result
        
    })
}
catch(e){
    console.log(e);
}
} 

export const setUserAction = (data) =>{
    console.log("serUSer",data);
    return{
        type: SET_USER,
        payload: data
    }
}

export const getUserAction = ()=>async (dispatch, getState) =>{
    try{
        console.log("GEtUserAction", getState("users"));
        const {username,password} = getState("users").userDetails.users[0];
        
        var result = await api.getUsers(username, password);
        console.log("getUSer",result);
        localStorage.setItem("token", result);
        return dispatch({
            type: GET_USER,
            payload: result
        })
    }
    catch(e){
        console.log(e)
    }
}
//expor insertAction;