import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({createRectangle}) => {
    const INITIAL_STATE = {
        height: 10,
        width: 10,
        fill: "#000000"
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
       const {name, value} = e.target;
       setFormData(data => ({
            ...data, 
            [name]:value
       }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createRectangle({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input id="width" type="number" name="width" placeholder="width" value={formData.width} onChange={handleChange}/>
            <label htmlFor="height">Height:</label>
            <input id="height" type="number"name="height" placeholder="height" value={formData.height} onChange={handleChange}/>
            <label htmlFor="fill">Fill:</label>
            <input id="fill" type="color" name="fill" placeholder="white" value={formData.fill} onChange={handleChange}/>
            <button>Create Box</button>
        </form>
    )
    
}

export default NewBoxForm;