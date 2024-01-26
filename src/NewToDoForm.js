import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewToDoForm = ({createToDo}) => {
    const INITIAL_STATE = {
        text:""
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
        createToDo({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Task:</label>
            <input id="text" type="text" name="text" placeholder="task" value={formData.text} onChange={handleChange}/>
            <button>Add To Do</button>
        </form>
    )
    
}

export default NewToDoForm;