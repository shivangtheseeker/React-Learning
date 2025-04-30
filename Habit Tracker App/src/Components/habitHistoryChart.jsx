import React, { useEffect, useState } from "react";

export default function HabitHistoryChart({ habits }) {
    return (
      <div>
        {habits.map(habit => (
          habit.showHistory && (
            <div key={habit.habitId}>
              <h2>{habit.name}</h2>
              {habit.history.map(h => (
                <p key={h.date}>{h.date}: {h.task ? "Done" : "Not Done"}</p>
              ))}
            </div>
          )
        ))}
      </div>
    )
  }