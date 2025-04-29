import React from "react";

export default function Btn ({
    label,
    type,
    btnHandler
}){

    return(
        <button onClick={(e) => {
            e.preventDefault();
            btnHandler && btnHandler()
        }} type={type}>
            {label}
        </button>
    )
}