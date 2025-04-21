import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

export default function Profile(){
    const {user} = useContext(UserContext)
    if (!user) return <div>Please logIn</div>
    return(
        <div>Welcome {user.username}</div>
    )
}