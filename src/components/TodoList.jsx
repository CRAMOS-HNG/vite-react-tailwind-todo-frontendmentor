import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="rounded-t-md bg-white overflow-hidden [&>article]:p-4 mt-8
        transition-all duration-500 dark:bg-gray-800">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo ={updateTodo} />
            ))}
        </div>
    );
};

export default TodoList;
