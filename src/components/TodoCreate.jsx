import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddtodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddtodo}
            className="dark:bg-gray-800 transition-all duration-500 mt-8 flex items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4"
        >
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="transition-all duration-500 dark:bg-gray-800 w-full text-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
