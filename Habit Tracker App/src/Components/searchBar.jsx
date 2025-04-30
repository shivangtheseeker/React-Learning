import React, { useState } from "react";

export default function SerachBar ({addHabit}) {
    const [habitName , setHabitName] = useState("");
    const habitHandler = (e) => {
        e.preventDefault()
        addHabit(habitName)
        setHabitName("")
    }
    return(
        <form 
        onSubmit={habitHandler}>
          <input 
          type="text"
          name="HabitName"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)} />
          <button type="submit">Add Habit</button>
        </form>
    )
}