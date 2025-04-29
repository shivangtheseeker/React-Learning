import React from "react";
import { useState } from "react";
import Btn from "./Btn"
import Calander from "./Calander"

export default function Input({
    date = new Date(),
}){

    const maxLimit = date.toISOString().split('T')[0];
    const minDate = new Date(date);
    minDate.setDate(minDate.getDate()-6);
    const minLimit =  minDate.toISOString().split('T')[0];

    const [value, setValue] = useState(maxLimit);
    const[mood, setMood] = useState('Happy');
    const [calender , setCalender] = useState([])

    const submitHandler = () => {
        setCalender(prev => [
            ...prev,
            {
            postDate: value,
            postMood : mood
        }])

    }

      

    return(
        <div>
            <form 
            action="/">
              <input 
              type="date" 
              value={value}
              max={maxLimit}  
              min={minLimit}
              onChange={(e)=>setValue(e.target.value)}
              name="date" />
              <select 
              onChange={(e)=>setMood(e.target.value)}
              name="mood">
                <option value="Happy">
                    Happy
                </option>
                <option value="Sad">
                    Sad
                </option>
                <option value="Confused">
                    Confused
                </option>
              </select>
              <Btn 
              label = "Submit"
              type = "submit"
              btnHandler={() => submitHandler()}/>
            </form>


            {
                calender.map((data)=>(
                    <Calander
                    date = {data.postDate}
                    mood = {data.postMood} />
                ) )             
            }

        </div>
        
    )
           

}