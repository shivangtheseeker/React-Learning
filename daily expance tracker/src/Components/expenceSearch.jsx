import React, { useState } from "react";

export default function ExpenceSearch ({AddSearchDate}) {

    const [date, setDate] = useState("")
    const formHandler = (e) => {
        e.preventDefault();
        AddSearchDate({date});
        setDate("")
    }

    return(
        <form onSubmit={formHandler}>
            <input 
            type="date"
            value={date}
            onChange={(e)=> setDate(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}