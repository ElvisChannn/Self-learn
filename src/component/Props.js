import React from "react"

function Props(props){
    return(
        <div>
            Name: {props.name} {" "}
            <a href={props.url}>{props.title}</a>
        </div>
    )
}

export default Props

