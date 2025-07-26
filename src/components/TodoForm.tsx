import { forwardRef } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface TodoFormProps {
  title: string;
  handleSubmit: (e: FormEvent) => void;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
}

const TodoForm = forwardRef<HTMLInputElement, TodoFormProps>(
  ({ title, handleSubmit, handleTitleChange, isEditing }, ref) => {
    return (
      <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="block text-cyan-300 font-medium mb-2">
              {isEditing ? "Editar Tarefa" : "Nova Tarefa"}
            </span>
            <input
              ref={ref}
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Digite sua tarefa"
              className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 outline-none transition-colors"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 cursor-pointer"
          >
            {isEditing ? "Salvar Edição" : "Adicionar Tarefa"}
          </button>
        </form>
      </div>
    );
  }
);

export default TodoForm;
