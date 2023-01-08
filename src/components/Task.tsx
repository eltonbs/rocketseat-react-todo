import { Trash } from "phosphor-react";
import { TaskInterface as TaskInterface } from "./interfaces";
import styles from "./Task.module.css";

export function Task({ id, title, isCompleted }: TaskInterface) {
  return (
    <li className={styles.task}>
      <input
        type="checkbox" id={`task-${id}`}
        defaultChecked={isCompleted}
      />

      <label htmlFor={`task-${id}`}>
        {title}
      </label>

      <button className={styles.deleteButton} title="Excluir tarefa">
        <Trash size="1rem" weight="bold" />
      </button>
    </li>
  );
}
