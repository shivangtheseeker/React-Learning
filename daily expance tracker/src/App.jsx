import UseExpenceTracker from './Hooks/useExpenceHandler'
import { ExpenceChart, ExpenceSearch, ExpenceForm } from './Components'
import './App.css'

function App() {

  const {
    expenceList,
    searchedDate,
    AddExpence,
    AddSearchDate,
    TotalExpence
  } = UseExpenceTracker()

  return (
    <>
    <ExpenceForm AddExpence = {AddExpence} />
    <ExpenceSearch AddSearchDate = {AddSearchDate}/>
    <ExpenceChart 
    expenceList = {expenceList} 
    searchedDate ={searchedDate} 
    TotalExpence = {TotalExpence} />
    </>
  )
}

export default App
