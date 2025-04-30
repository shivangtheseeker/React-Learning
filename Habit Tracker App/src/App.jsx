import { UseHabitData } from './Hooks/useHabitData'
import { SerachBar, HabitCard, HabitHistoryChart } from './Components'
import './App.css'


function App() {
  const {
    habits,
    addHabit,
    toggleStatus,
    toggleHistory
  } = UseHabitData()

  return (
    <div>
      <SerachBar addHabit={addHabit} />
      {habits.map(h => (
        <HabitCard 
          key={h.habitId} 
          habit={h} 
          toggleStatus={toggleStatus} 
          toggleHistory={toggleHistory} 
        />
      ))}
      <HabitHistoryChart habits={habits} />
    </div>
  )
}

export default App
