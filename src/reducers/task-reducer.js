export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];
    case "update":
      return tasks.map((task) => (task.id === action.task.id ? action.task : task));
    case "delete":
      return tasks.filter((task) => task.id !== action.id);
    case "completed":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return tasks;
  }
}
