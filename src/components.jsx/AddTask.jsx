/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [addTask, setAddTask] = useState("");

    function handleAddTask() {
        onAddTask(addTask);
        //setAddTask("");
        setAddTask(prevAddTask => {
            if (prevAddTask === undefined) {
                return "";
            }
            return "";
        });
    }

    return (
        <div className="flex justify-center mt-4">
            <div>
                <p className="mb-2">Add a new task</p>
                <div className="justify-center">
                    <input
                        type="text"
                        className="border-2 block input input-bordered w-screen max-w-sm"
                        value={addTask}
                        onChange={(e) => setAddTask(e.target.value)}
                    />
                    <button
                        className="bg-indigo-500 rounded text-white flex items-center mt-3 p-2"
                        onClick={handleAddTask}
                    >
                        Add task
                    </button>
                </div>
            </div>
        </div>
    );
}