import React from "react";
import Cards from "./Cards";

function DisplayData(props) {
    return(
        <div>
            {props.data.map(index => {
                return (
                    <Cards name={index.name} country={index.country} searches={index.searches} key={index.id} />
                )
            })}
        </div>
    )
}

export default DisplayData;