import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
    addTodoFailure,
    addTodoRequest,
    addTodoSuccess,
    todosFailure,
    todosRequest,
    todosSuccess,
} from "../Redux/AppReducer/action";

const Todos = () => {
    const dispatch = useDispatch();
    // const todos=useSelector((store)=>store.todos)
    const { todos, isLoading, isError } = useSelector((store) => {
        return {
            todos: store.AppReducer.todos,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError,
        };
    }, shallowEqual);

    const getTodos = () => {
        dispatch(todosRequest());
        return axios
            .get("http://localhost:8020/todos")
            .then((r) => {
                dispatch(todosSuccess(r.data));
            })
            .catch((e) => {
                dispatch(todosFailure());
            });
    };

    const addTodos = (payload) => {
        dispatch(addTodoRequest());
        return axios
            .post("http://localhost:8020/todos", payload)
            .then((r) => {
                dispatch(addTodoSuccess());
            })
            .catch((e) => {
                console.log(e);
                dispatch(addTodoFailure());
            });
    };

    const handleAddTodo = (payload) => {
        addTodos(payload).then(() => getTodos());
    };

    //first task to get the data from the db.json file
    //using useEffect for no side effects will me mounted the data in empty dependency array
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <>
            <h1>Todos</h1>
            <TodoInput addTodos={handleAddTodo} />
            {todos.length > 0 &&
                todos.map((item) => {
                    return <div key={item.id}>{item.title}</div>;
                })}
        </>
    );
};

export default Todos;
