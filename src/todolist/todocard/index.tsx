import { useTodoStorage } from "../../useTodoStore"

export default function TodoCard() {

    const { todoList,  removeTodo} = useTodoStorage(({todoList, removeTodo}) => ({todoList, removeTodo}))

    return(
        <div>
            {todoList.map((todoCard) => {
                return(
                    <div key={todoCard.id}>
                        <h2>Name: {todoCard.name}</h2>
                        <p>Id: {todoCard.id}</p>
                        <button onClick={() => removeTodo(todoCard.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}