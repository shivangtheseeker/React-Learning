import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [length , setLength] = useState(8);
  let [numAllowed , setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+= "~`!@#$%^&*(){}[]:;";

    for(let i = 1 ; i<= length ; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length , numAllowed , charAllowed , passwordGenerator]) 

  const passwordRef = useRef(null);

  const copyPass = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    },
    [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-500'>
        <h1 className='text-white text-center'>Gen Your Pass</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          placeholder='Gen password'
          className='outline-none w-full py-1 px-3 text-black'
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={()=>{copyPass()}}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={20} 
            value={length}
            className='curser-pointer'
            onChange={(e) => {setLength(e.target.value)} } />
            <label>Length: {length}  </label>
          </div>

          <div className='flex items-center gap-x-1' >
            <input 
            type="checkbox"
            defaultValue={numAllowed}
            onChange={ () => {
              setNumAllowed((prev) => !prev);
            }}
            />
            <label>Number</label>

          </div>

          <div className='flex items-center gap-x-1' >
            <input 
            type="checkbox"
            defaultValue={charAllowed}
            onChange={ () => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label>charcter</label>

          </div>



        </div>

      </div>
    </>
  )
}

export default App
