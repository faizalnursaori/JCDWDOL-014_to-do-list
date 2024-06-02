import { useReducer, useMemo } from "react";
import TaskLists from "./components.jsx/TaskLists";
import AddTask from "./components.jsx/AddTask";
import taskReducer from "./reducers/task-reducer";

const initialTasks = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
];

let nextTaskId = 4;

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);


  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);


  function handleAddTask(taskTitle) {
    dispatch({
      type: "add",
      id: nextTaskId++,
      title: taskTitle,
    });
  }

  function handleUpdateTask(updatedTask) {
    dispatch({
      type: "update",
      task: updatedTask,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      id: taskId,
    });
  }

  function handleToggleCompleted(taskId) {
    dispatch({
      type: "completed",
      id: taskId,
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">
        <h1 className="text-3xl mb-4 text-center font-bold">My To-Do List</h1>
        <TaskLists
          tasks={tasks}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          onToggleCompleted={handleToggleCompleted}
          completedTasks={completedTasks}
        />
        <AddTask onAddTask={handleAddTask} />
      </div>
    </div>
  );
}

export default App;
