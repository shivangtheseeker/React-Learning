import React from "react";

export default function ExpenceChart ({expenceList, searchedDate, TotalExpence}) {
    return(
        <section>
            {
              expenceList.filter((expence)=>(expence.date === searchedDate))
              .map((expence)=>{
                console.log("Showing:", expence.name, expence.date);
                return(
                    <article key={expence.name}>
                      <h1>{expence.name}</h1>
                      <h1>{expence.amount}</h1>
                    </article>

                )
               })      
                
            }
            <article>
                <h1>Total</h1>
                <h1>{TotalExpence()}</h1>
            </article>
        </section>
    )

}