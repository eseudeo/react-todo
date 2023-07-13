import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, IToDoList } from "../atoms";
import ToDo from "./ToDo";

function ToDoList({ todoList, category }: IToDoList) {
  return (
    <>
      {todoList?.map((toDo) => (
        <li key={toDo.id}>{toDo.text}</li>
        // <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
}
export default ToDoList;
