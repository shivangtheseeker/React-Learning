import React, { useId } from "react";

function InputContainer(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = 'inr'

    }
){
    const amountInputId = useId()
    return(
        <fieldset className="flex justify-between bg-white p-3 rounded-lg text-sm ">
            <div className="flex flex-col gap-4 w-1/2 ">
                <label 
                className="text-black/40 mb-2" 
                htmlFor={amountInputId}>
                    {label}
                </label>
                <input 
                className="outline-none w-full bg-transparent py-1.5" 
                id={amountInputId}
                name="amount" 
                type="number" 
                placeholder="amount" 
                value={amount} 
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className="flex flex-col gap-4 w-1/2">
                <label 
                className="text-black/40 mb-2 w-full" 
                htmlFor="currencyType">
                    Currency type
                </label>

                <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                name="currencyType" 
                id="currencyType"
                value={selectCurrency}
                onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                >    
                    {
                        currencyOptions.map((Currency)=> 
                            <option key={Currency} value={Currency}>
                                {Currency}
                            </option>
                        )

                    }
                </select>
            </div>
        </fieldset>
    )

}

export default InputContainer;