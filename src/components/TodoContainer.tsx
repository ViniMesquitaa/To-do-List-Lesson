import { FaEdit, FaTrash } from "react-icons/fa";
import type { ITodo } from "../types/ITodo";
import TodoForm from "./TodoForm";
import type { Ref } from "react";

type TodoContainerProps = {
  todos: ITodo[];
  title: string;
  isEditing: boolean;
  handleSubmit: (event: React.FormEvent) => void;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompleted?: (id: number) => void;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
  inputRef?: Ref<HTMLInputElement>;
};

export const TodoContainer = ({
  todos,
  title,
  isEditing,
  handleSubmit,
  handleTitleChange,
  handleCompleted,
  handleEdit,
  handleDelete,
  inputRef,
}: TodoContainerProps) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Task Manager
        </h1>
        <p className="text-gray-400">Organize sua vida em um só lugar</p>
      </div>

      <TodoForm
        ref={inputRef}
        title={title}
        isEditing={isEditing}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
      />

      <div className="my-6 p-4 bg-gray-750 rounded-lg border border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-300">Progresso</span>
          <span className="text-xs bg-cyan-900 text-cyan-300 px-2 py-1 rounded-full">
            {todos.filter((t) => t.completed).length}/{todos.length}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
            style={{
              width:
                todos.length > 0
                  ? `${
                      (todos.filter((t) => t.completed).length / todos.length) *
                      100
                    }%`
                  : "0%",
            }}
          ></div>
        </div>
      </div>

      {todos.length === 0 ? (
        <div className="text-center">
          <h3 className="text-gray-300 font-medium">
            Nenhuma tarefa encontrada
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Adicione sua primeira tarefa acima
          </p>
        </div>
      ) : (
        <ul className="space-y-3 overflow-y-scroll max-h-50 scroll-y-custom">
          {todos.map((todo) => (
            <li
              key={todo.id}
              title={todo.title}
              className={`group p-4 rounded-xl flex items-center transition-all duration-200
                ${
                  todo.completed
                    ? "bg-gray-750"
                    : "bg-gray-700 hover:bg-gray-650"
                } border border-gray-700`}
            >
              <button
                onClick={() => handleCompleted?.(todo.id)}
                className={`mr-3 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer
                  ${
                    todo.completed
                      ? "border-cyan-400 bg-cyan-400 text-gray-800"
                      : "border-gray-500 hover:border-cyan-400"
                  }`}
                title={
                  todo.completed
                    ? "Marcar como pendente"
                    : "Marcar como concluído"
                }
              >
                {todo.completed && (
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>

              <div className="flex-1 min-w-0">
                <p
                  className={`truncate text-sm font-medium ${
                    todo.completed
                      ? "text-gray-500 line-through"
                      : "text-gray-200"
                  }`}
                >
                  {todo.title}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    todo.completed ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Criado em: {new Date(todo.id).toLocaleDateString()}
                </p>
              </div>

              <div className="flex space-x-2 ml-3 xl:opacity-0 xl:group-hover:opacity-100 md:transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit?.(todo.id);
                  }}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                  title="Editar"
                >
                  <FaEdit size={14} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete?.(todo.id);
                  }}
                  className="p-2 text-gray-400 hover:text-rose-400 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
                  title="Excluir"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
