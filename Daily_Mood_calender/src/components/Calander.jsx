import React from "react";

export default function Calander ({
    date,
    mood
}){

    return(
        <section>
            <h1>{date}</h1>
            <p> Your mood at this day was {mood} </p>
        </section>
    )

}
