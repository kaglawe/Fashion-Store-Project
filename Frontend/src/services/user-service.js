import { myAxios } from "./Helper";

export const signUp=(user)=>{

    return myAxios.post("/home/register",user)
    .then((response) => response.data);
};
export const signIn = (user) =>{
    return myAxios.post("/home/login",user)
    .then((response) => response.data)
};

