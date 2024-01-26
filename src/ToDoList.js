import React, {ReactFragment, useState} from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
    const [todos, setList] = useState([]);

    const createToDo = todoData => {
        setList(todos => [...todos, todoData]);
    }
    
    const removeToDo = id => {
        setList(todos => todos.filter(
            todo => todo.id !== id
        ));
    }

    const listedToDos = todos.map(todo=>(<ToDo
        text={todo.text}
        id ={todo.id}
        key ={todo.id}
        handleRemove = {removeToDo}
    />));

    return (
        <div>
            <NewToDoForm createToDo={createToDo}></NewToDoForm>
            <div>
                {listedToDos}
            </div>
        </div>
    );
}


export default ToDoList;