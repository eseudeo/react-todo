import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ICategory, toDoState } from "../atoms";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import CreateToDo from "./CreateToDo";
import ToDoList from "./TodoList";

const BoardsItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const Board = styled.div`
  min-height: 350px;
  min-width: 250px;
  background: white;
  margin: 10px 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

function Boards() {
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const [toDos, setTodos] = useRecoilState(toDoState);

  //   const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
  //     setCategories(event.currentTarget.value as any);
  //   };
  const handleValid = ({ category }: ICategory) => {
    if (category === "") {
      return;
    }

    setTodos((toDos) => {
      return {
        [category]: [],
        ...toDos,
      };
    });
    setValue("category", "");
    // setCategories((old) => [category.toUpperCase(), ...old]);
    //setValue("category", "");
  };

  return (
    <>
      <div>
        <header>
          <form onSubmit={handleSubmit(handleValid)}>
            <input
              {...register("category", {
                required: "Please write a Category",
              })}
              placeholder="Write a Category"
            ></input>
            <button>Add Category</button>
          </form>
        </header>
      </div>
      <BoardsItem>
        {
          //categories?.map((category) =>
          //obejct 앞 부분 추출
          Object.keys(toDos).map((category) => (
            <Board key={category}>
              <Title>{category}</Title>
              <CreateToDo
                todoList={toDos[category]}
                category={category}
              ></CreateToDo>
              <ToDoList
                todoList={toDos[category]}
                category={category}
              ></ToDoList>
            </Board>
          ))
        }
      </BoardsItem>
    </>
  );
}
export default Boards;
