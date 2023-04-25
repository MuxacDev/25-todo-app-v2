import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
  // return (
  //   <>
  //     <Todo />
  //     <Todo />
  //     <Todo />
  //   </>
  // );
}

export default TodoList;
