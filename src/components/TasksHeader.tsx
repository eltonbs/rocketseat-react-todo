import { TaskInterface } from "./interfaces";
import styles from "./TasksHeader.module.css"

interface Props {
  tasks: TaskInterface[];
}

export function TasksHeader({ tasks }: Props) {
  const completedTasksCount = tasks.reduce((count, task) => {
    return task.isCompleted ? ++count : count
  }, 0);

  const completedTasksBadge = tasks.length > 0 ? `${completedTasksCount} de ${tasks.length}` : '0';

  return (
    <header className={styles.tasksHeader}>
      <span className={styles.createdTasks}>
        Tarefas criadas
        <span className="badge">{tasks.length}</span>
      </span>
      <span className={styles.completedTasks}>
        Concluídas
        <span className="badge">{completedTasksBadge}</span>
      </span>
    </header>
  );
}
