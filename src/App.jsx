import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
    return (
        <div className="bg-gray-200 bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                      <MoonIcon className="fill-red-400"></MoonIcon>
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4">
                    <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4 ">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button>
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button>
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button>
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button>
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>

                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8">
              <div className="flex justify-center bg-white p-4 rounded-md gap-4">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Active</button>
                <button className="hover:text-blue-600">Completed</button>
              </div>
            </section>
            <p className="text-center mt-8">Drag and drop to reorder list</p>
        </div>
    );
};

export default App;
