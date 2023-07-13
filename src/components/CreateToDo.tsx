import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDoList, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo({ todoList, category }: IToDoList) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((oldTodos) => {
      return {
        ...oldTodos,
        [category]: [...oldTodos[category], newToDo],
      };
    });
    setValue("toDo", "");

    //setToDos((oldToDos) => [{ text: toDo, id: Date.now() }, ...oldToDos]);
    //setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
