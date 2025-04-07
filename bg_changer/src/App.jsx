import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

      <footer className="fixed bottom-5 flex justify-center flex-wrap inset-x-0">
        <div className='flex flex-wrap gap-2 justify-center px-4 py-2 rounded-xl bg-white '>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 py-2 rounded-xl text-white' style={{backgroundColor: "orange"}}>Orange</button>
        </div>
        
      </footer>

    </div>
  )
}

export default App
