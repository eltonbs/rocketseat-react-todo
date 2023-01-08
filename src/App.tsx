import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import logo from './assets/logo.png';
import styles from './App.module.css'

const tasks = [
  {
    id: '1',
    title: 'Primis dapibus laudem pertinax quo quidam te.',
    isCompleted: false,
  },
  {
    id: '2',
    title: `Vocent hendrerit ut tristique bibendum quo veri utamur.
            Utroque pharetra graeco ignota hinc explicari quo viderer.
            Laoreet agam definitionem malorum adversarium.`,
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Odio mauris porta ne maiorum docendi metus animal euripidis his.',
    isCompleted: true,
  },
];

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="Todo app" />
      </header>

      <main>
        <NewTask />

        <TaskList tasks={tasks} />
      </main>
    </div>
  )
}
