import { PlusCircle, Trash } from "phosphor-react";
import './App.css'
import logo from './assets/logo.png';

export function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="Todo app"/>
      </header>

      <main>
        <div className="searchBar">
          <form>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
              Criar <PlusCircle size="1.2rem" weight="bold" />
            </button>
          </form>
        </div>

        <div className="tasksContainer">
          <header className="tasksHeader">
            <span className="createdTasksLabel">Tarefas criadas<span className="badge">5</span></span>
            <span className="doneTasksLabel">Concluídas<span className="badge">2 de 5</span></span>
          </header>

          <div className="taskList">
            <article className="task">
              <input type="checkbox" id="task-1" />
              <label htmlFor="task-1">
                Primis dapibus laudem pertinax quo quidam te.
              </label>
              <button className="deleteButton" title="Excluir tarefa">
                <Trash size="1rem" weight="bold" />
              </button>
            </article>
            <article className="task">
              <input type="checkbox" id="task-2" />
              <label htmlFor="task-2">
                Vocent hendrerit ut tristique bibendum quo veri utamur.
                Utroque pharetra graeco ignota hinc explicari quo viderer.
                Laoreet agam definitionem malorum adversarium.
              </label>
              <button className="deleteButton" title="Excluir tarefa">
                <Trash size="1rem" weight="bold" />
              </button>
            </article>
            <article className="task">
              <input type="checkbox" id="task-3" />
              <label htmlFor="task-3">
                Odio mauris porta ne maiorum docendi metus animal euripidis his.
              </label>
              <button className="deleteButton" title="Excluir tarefa">
                <Trash size="1rem" weight="bold" />
              </button>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}
