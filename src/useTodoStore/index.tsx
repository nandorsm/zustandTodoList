import { create } from "zustand";
import { TaskSchema } from "../todocreateform";

interface ITodoList {
    todoList: TaskSchema[];
    addTodo: (newTodo: TaskSchema[]) => void;
    removeTodo: (todoId: string) => void;
}

export const useTodoStorage = create<ITodoList>((set) => ({
    todoList: [],
    addTodo: (newTodo) => set(({ todoList }) => {
        const newTodoList = [...todoList, ...newTodo];
        return { todoList: newTodoList };
    }),

    removeTodo: (todoId) => set(({ todoList }) => {
        const newTodoList = todoList.filter((currentTodo) => currentTodo.id !== todoId);
        return { todoList: newTodoList };
    })
}));