import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    if (!todo) {
        return null;
    }
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                onClick={() => updateTodo(id)}
                className={`w-5 h-5 flex-none rounded-full border-2 ${
                    completed
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
                        : "inline-block rounded-full border-2"
                }`}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}>
                {title}
            </p>
            <button 
            className="flex-none"
            onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};
export default TodoItem;
