import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTodoStorage } from "../useTodoStore";
import TodoCard from "../todolist/todocard";
import { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type TaskSchema = z.infer<typeof taskSchema>;

export default function TodoCreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      id: "uuidv4()",
    },
  });

  const { addTodo } = useTodoStorage(({ addTodo }) => ({ addTodo }));

  const todoSubmit = (data: TaskSchema) => {
    console.log(data);
    data.id = uuidv4();
    addTodo([{ id: data.id, name: data.name }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(todoSubmit)}>
        <input type="text" placeholder="type your task" {...register("name")} />
        <button type="submit">Add Task</button>
      </form>
      <br />
      <br />
      <br />
    </>
  );
}
