import { useState } from "react"

function Shivang(){

    let [counter , setCounter] = useState(0);
    let add = ()=>{
       if(counter >= 9){
         alert('value can not be added');
       }
       else{
         setCounter(counter+1);
       }
    }
    let subtract = ()=>{
        if (counter <= 0){
         alert('value can not be subtracted');
        }
       else {
         setCounter(counter-1);
      }
    }


    return(
        <section>
            <div>{counter}</div>
            <button onClick={add} >add value</button>
            <button onClick={subtract}>remove value</button>
        </section>
    )

}
export default Shivang