import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
//console.log(styles);

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  /*контроллируемое поле ввода*/
  const onSubmitHandler = (event) => {
    event.preventDefault(); //чтобы не перешло на новую страницу при сабмите
    addTodo(text);
    setText(""); //обнуление поля ввода
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          value={text}
          onChange={(e) => setText(e.target.value /*значение из поля ввода*/)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
