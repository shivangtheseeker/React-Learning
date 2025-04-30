import React, { useState } from "react";

export default function UseExpenceTracker () {
    const [expenceList , setExpenceList] = useState([])
    const [searchedDate , setSearchedDate] = useState("")

    const AddExpence = ({name , amount, date}) => {
        setExpenceList((prev)=>([...prev , {name, amount , date}]))
    }

    const AddSearchDate = ({date}) => {
        setSearchedDate(date)
    }

    const TotalExpence = ()=>{
        const selectedExpence = expenceList.filter((expence)=>(expence.date === searchedDate))
        const Total = () => {
            let final = 0;
            for(let i = 0 ; i < selectedExpence.length ; i++){
                final = final + parseInt(selectedExpence[i].amount);
            }
            return final;
        }
        return Total()
    }

    return {
        expenceList,
        searchedDate,
        AddExpence,
        AddSearchDate,
        TotalExpence,
    }

}