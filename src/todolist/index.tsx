import { useTodoStorage } from "../useTodoStore"
import TodoCard from "./todocard"

export default function TodoList() {
   
    const { todoList } = useTodoStorage(({ todoList }) => ({ todoList }))

    console.log(todoList)
   
    return(
        <div>
            <h1>To Do List</h1>
            <TodoCard />
        </div>
    )
}