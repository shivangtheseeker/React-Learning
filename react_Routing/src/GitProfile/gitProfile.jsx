import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function GitProfile(){
    
   
    const data = useLoaderData()
    //const [data , setData] = useState({})
    //useEffect(()=>{
    //    fetch(`https://api.github.com/users/${gitname}`)
    //    .then((res)=>res.json())
    //    .then((data)=>setData(data))
    //    console.log(data);
    //},[])
   return(
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">shivang's followers are {data.followers}</h1>
        <img src={data.avatar_url} alt="profilepic" />
    </div>
    
   )
}

export const GithubLoder = async () => {
    const respo = await fetch(`https://api.github.com/users/shivangtheseeker`)
    return respo.json()
}