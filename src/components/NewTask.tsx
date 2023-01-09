import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { TaskInterface } from "./interfaces";
import styles from "./NewTask.module.css";

interface Props {
  onCreateTask: (task: TaskInterface) => void;
}

export function NewTask({ onCreateTask }: Props) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: uuidv4(),
      title: newTaskText,
      isCompleted: false,
    }

    onCreateTask(task);
    setNewTaskText('');
  }

  return (
    <form
      className={styles.newTask}
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
        required
      />
      <button disabled={newTaskText.trim().length === 0}>
        Criar <PlusCircle size="1.2rem" weight="bold" />
      </button>
    </form>
  );
}
