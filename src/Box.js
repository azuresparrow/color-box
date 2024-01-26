import React from "react";

const Box = ({width = 10, height = 10, backgroundColor='black', id, handleRemove}) => {
    const removeRect = () => handleRemove(id);
    return (
    <div style={{
        id,
        height:`${height}em`,
        width:`${width}em`,
        backgroundColor
    }}>
        <button onClick={removeRect}>X</button>
    </div>);
}


export default Box;