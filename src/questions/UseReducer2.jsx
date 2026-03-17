// 2. Todo List with Add and Delete :- Build a simple Todo List using useReducer.

import React, { useReducer } from "react";
import ReducerForm from "./ReducerForm";
import ReducerTable from "./ReducerTable";

export default function UseReducer2() {
  const [todos, dispatch] = useReducer(reducer, []);
  function reducer(todo, action) {
    switch (action.type) {
      case "Add":
        return [...todo, action.payload];
      case "Delete":
        return todo.filter((item) => item.id !== action.payload);
    }
  }
  return (
    <div>
      <ReducerForm dispatch={dispatch} />
      <ReducerTable todos={todos} dispatch={dispatch} />
    </div>
  );
}
