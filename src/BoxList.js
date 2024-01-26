import React, {ReactFragment, useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const createRectangle = boxData => {
        setBoxes(boxes => [...boxes, boxData]);
    }
    
    const removeRectangle = id => {
        setBoxes(boxes => boxes.filter(
            box => box.id !== id
        ));
    }

    const listedBoxes = boxes.map(rect=>(<Box
        width={rect.width}
        height={rect.height}
        id ={rect.id}
        key ={rect.id}
        handleRemove = {removeRectangle}
        backgroundColor = {rect.fill}
    />));

    return (
        <div>
            <NewBoxForm createRectangle={createRectangle}></NewBoxForm>
            <div>
                {listedBoxes}
            </div>
        </div>
    );
}


export default BoxList;