import { useState } from 'react'
import './App.css'
import { InputContainer } from './Components'
import useCurrencyinfo from './Hooks/useCurrencyinfo'



function App() {
    const [amount, setAmount] = useState(0)
    const [from , setFrom] = useState('inr')
    const [to , setTo] = useState('usd')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyinfo = useCurrencyinfo(from)
    const options = Object.keys(currencyinfo)

    const swap = () =>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = ()=>{setConvertedAmount(amount* currencyinfo[to])}
    return(
        <>
        <div className='w-full h-screen flex items-center justify-center '>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <form
                onSubmit={(e)=>{
                    e.preventDefault();
                    convert()
                    
                }}>
                    <div className="w-full mb-1">
                        <InputContainer
                         label="From"
                         amount = {amount}
                         onAmountChange={(amount)=>{setAmount(amount)}}
                         currencyOptions={options}
                         onCurrencyChange={(currency)=>{
                            setFrom(currency)
                         }}
                         selectCurrency={from}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button 
                        type='button'
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}>
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputContainer
                        label="To"
                        amount = {convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>{
                           setTo(currency)
                        }}
                        selectCurrency={to}/>
                    </div>
                    <button 
                    type='submit'
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                        Convert

                    </button>
                    
                </form>
            
            </div>
        </div>
       
        </>
    )
  
}

export default App
