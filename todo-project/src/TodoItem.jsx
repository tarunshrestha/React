export function TodoItem({id, completed, title, toogleTodo, deleteTodo}){
    return (
        <li key={id}>  
        <label>
          <input type="checkbox" checked={completed} onChange={e=> toogleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className='"btn btn-danger'>Delete</button>
      </li>
    )
}