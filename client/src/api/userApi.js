import axios from "axios";

const URL = "http://localhost:8085/api/user";

export const insertUser = (users) => {
    console.log("API", users.userRecords);

    return axios.post(URL,users,{headers:{
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjYwOGU5NjMxODk1OWVmMTExMGZmOTMwMyIsImlhdCI6MTYyMDE5MjM0NiwiZXhwIjoxNjIwMjAyNDI2fQ.-hJcW9TO2oi_JvEolPtZ_uZAMwzIt7t71g1srKZsvbg",
        "content-type": "multipart/form-data"
    }});
}

export const getUsers = (username,password) =>{
    return axios.get(URL,{
    //     headers:{
    //     "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjYwOGU5NjMxODk1OWVmMTExMGZmOTMwMyIsImlhdCI6MTYyMDE5MjM0NiwiZXhwIjoxNjIwMjAyNDI2fQ.-hJcW9TO2oi_JvEolPtZ_uZAMwzIt7t71g1srKZsvbg"
    // },
    params: {
        username,
        password
    }
});
}