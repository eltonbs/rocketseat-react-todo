import { Trash } from "phosphor-react";
import { TaskInterface as TaskInterface } from "./interfaces";
import styles from "./Task.module.css";

interface Props extends TaskInterface {
  onToggleCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, title, isCompleted, onToggleCompletedTask, onDeleteTask }: Props) {
  return (
    <li className={styles.task}>
      <input
        type="checkbox" id={`task-${id}`}
        defaultChecked={isCompleted}
        onChange={() => onToggleCompletedTask(id)}
      />

      <label htmlFor={`task-${id}`}>
        {title}
      </label>

      <button
        className={styles.deleteButton}
        title="Excluir tarefa"
        onClick={() => onDeleteTask(id)}
      >
        <Trash size="1rem" weight="bold" />
      </button>
    </li>
  );
}
