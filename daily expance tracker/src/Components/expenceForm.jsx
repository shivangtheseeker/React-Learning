import React, { useState } from "react";

export default function ExpenceForm ({AddExpence}) {
    const [name , setName] = useState("")
    const [amount , setAmount] = useState("0")
    const [date , setDate] = useState("")
    const formHandler = (e) => {
        e.preventDefault()
        AddExpence({name, amount , date})
        setName("")
        setAmount("")
        setDate("")
    }
    return(
        <form
        onSubmit={formHandler}>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} />
            <input 
            type="number" 
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}/>
            <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )

}