import { useState } from "react";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import { TaskInterface } from "./components/interfaces";
import logo from './assets/logo.png';
import styles from './App.module.css'

export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function createTask(task: TaskInterface) {
    setTasks([...tasks, task]);
  }

  function toggleCompletedTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: string) {
    const remainingTasks = tasks.filter(task => task.id !== taskId)

    setTasks(remainingTasks);
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Todo app" />
      </header>

      <main>
        <NewTask onCreateTask={createTask}/>

        <TaskList
          tasks={tasks}
          onToggleCompletedTask={toggleCompletedTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  )
}
