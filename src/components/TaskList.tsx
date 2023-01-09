import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";
import { TasksHeader } from "./TasksHeader";
import { TaskInterface } from "./interfaces";
import styles from "./TaskList.module.css";

interface Props {
  tasks: TaskInterface[];
  onToggleCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleCompletedTask, onDeleteTask }: Props) {
  const taskList = tasks.map(task =>
    <Task
      key={task.id}
      onToggleCompletedTask={onToggleCompletedTask}
      onDeleteTask={onDeleteTask}
      {...task}
    />
  );

  const empty =
    <div className={styles.emptyTaskList}>
      <ClipboardText
        className={styles.clipBoardIcon}
        size="3rem"
        weight="thin"
      />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  ;

  return (
    <div className={styles.taskList}>
      <TasksHeader tasks={tasks} />

      <ul>
        {tasks.length > 0 ?
          taskList :
          empty
        }
      </ul>
    </div>
  );
}
