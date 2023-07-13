import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface ICategory {
  category: string;
}

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoTotal {
  [key: string]: IToDo[];
}

export interface IToDoList {
  todoList: IToDo[];
  category: string;
}

export const toDoState = atom<IToDoTotal>({
  key: "toDo",
  default: {
    "TO DO": [],
    DOING: [],
    DONE: [],
  },
  effects_UNSTABLE: [persistAtom],
});
