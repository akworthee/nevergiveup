import { object } from "prop-types";

const INITIAL_STATE = {
    users:[],
    products:[]
}
// export default (state= INITIAL_STATE,action) =>{

// }
export const userDetails = (users=[],action)=>{
    switch(action.type){
        case "GET_USER":
            const {refreshToken, accessToken} = action.payload.data;
            console.log("getReducers", {...users.users[0], refreshToken, accessToken})
            return {users:[{...users.users[0], refreshToken, accessToken}]} // [...users, action.payload.data]
        case "INSERT_USER":
            console.log("reducers",users)
            return users;
        case "SET_USER":
            console.log("setReducers",action.payload)

            return {
             users: [action.payload]
            
            }
            
        default:
            return users;
    }

}