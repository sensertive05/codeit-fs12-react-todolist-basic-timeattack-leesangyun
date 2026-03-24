function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      
      <span className={todo.completed ? 'title completed' : 'title'}>
        {todo.title}
      </span>

      <span className="date">
        {new Date(todo.createdAt).toLocaleString()}
      </span>

      <div className="buttons">
        <button onClick={() => onToggle(todo.id)}>
          {todo.completed ? '취소' : '완료'}
        </button>
        <button onClick={() => onDelete(todo.id)}>삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;