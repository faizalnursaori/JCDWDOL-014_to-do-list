/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Task({ task, onUpdate, onDelete, onToggleCompleted }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <div className="flex items-center justify-center mb-2 w-full">
                <input
                    type="text"
                    value={task.title}
                    onChange={(e) => onUpdate({ ...task, title: e.target.value })}
                    className="input input-bordered border-2 block w-full mr-2"
                />
                <button
                    className="bg-blue-500 p-1 rounded text-white"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </div>
        );
    } else {
        taskContent = (
            <div className="flex items-center justify-center mb-2 w-full">
                <span className="w-full text-left mr-2 ml-4">{task.title}</span>
                <button
                    className="bg-indigo-500 p-1 rounded text-white mr-2"
                    onClick={() => setIsEditing(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                        ></path>
                    </svg>
                </button>
                <button
                    className="bg-red-500 p-1 rounded text-white"
                    onClick={() => onDelete(task.id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        ></path>
                    </svg>
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center">
            <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success mr-2 mb-2"
                checked={task.completed}
                onChange={() => onToggleCompleted(task.id)}
            />
            {taskContent}
        </div>
    );
}