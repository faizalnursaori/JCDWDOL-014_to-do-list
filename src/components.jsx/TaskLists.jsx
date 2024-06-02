/* eslint-disable react/prop-types */

import Task from "./Task";

export default function TaskLists({
    tasks,
    onUpdateTask,
    onDeleteTask,
    onToggleCompleted,
    completedTasks,
}) {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task
                            task={task}
                            onUpdate={onUpdateTask}
                            onDelete={onDeleteTask}
                            onToggleCompleted={onToggleCompleted}
                        />
                    </li>
                ))}
            </ul>
            <hr className="mt-3" />
            <p className="text-center text-xl font-bold mt-5">Done : {completedTasks}</p>
        </div>
    );
}