import React from "react";
function Logout(){
    console.log(
        "before logout"+ localStorage.getItem("loginDetails")
        ?localStorage.getItem("loginDetails")
        :null
    );
    localStorage.removeItem("email");
    localStorage.removeItem("loginDetails");
    localStorage.clear();
    console.log(
        "after logout"+localStorage.getItem("loginDetails")
        ?localStorage.getItem("loginDetails")
        :null
    );
    return<div className="text-light">{(window.location.href="/Login")}</div>;
}
export default Logout;