import { useId, useState } from 'react'

export const UseHabitData = () => {
    const [habits, setHabits] = useState([])

    const addHabit = (habitName) => {
        const today = new Date().toISOString().split('T')[0];
        setHabits((prev) => ([...prev , {
            habitId: Date.now() + Math.random().toString(36).substr(2, 9),
            name : habitName,
            history: [
                {date : today , task: false}
            ],
            showHistory: false
        }]))
    }

    const toggleStatus = (habitId, date) => {
        setHabits((prevHabits) =>
          prevHabits.map((habit) => {
            if (habit.habitId !== habitId) return habit;
    
            const updatedHistory = habit.history.map((entry) =>
              entry.date === date ? { ...entry, task: !entry.task } : entry
            );
    
            if (!habit.history.some((entry) => entry.date === date)) {
              updatedHistory.push({ date, task: true });
            }
    
            return {
              ...habit,
              history: updatedHistory,
            };
          })
        );
      };
    
      
      const toggleHistory = (habitId) => {
        setHabits((prevHabits) =>
          prevHabits.map((habit) =>
            habit.habitId === habitId
              ? { ...habit, showHistory: !habit.showHistory }
              : habit
          )
        );
      };

    return {
        habits,
        addHabit,
        toggleStatus,
        toggleHistory,
    }
}


