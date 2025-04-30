import React from "react";

export default function HabitCard ({
    habit, toggleStatus, toggleHistory 
}) {

    const date = new Date().toISOString().split("T")[0];
    const todayStatus = habit.history.find(h => h.date === date)?.task || false
    

    return(
        <div>
        <input 
          type="checkbox" 
          checked={todayStatus} 
          onChange={() => toggleStatus(habit.habitId, date)} 
        />
        <label>{habit.name}</label>
        <button onClick={() => toggleHistory(habit.habitId)}>Show History</button>
      </div>
    )

}