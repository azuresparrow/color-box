import React from "react";

const Box = ({text="", id, handleRemove}) => {
    const removeToDo = () => handleRemove(id);
    return (
    <div>
        <span>{text}</span>
        <button onClick={removeToDo}>X</button>
    </div>);
}


export default Box;