import { useEffect, useRef, useState } from "react";
import type { ITodo } from "../types/ITodo";
import { TodoContainer } from "../components/TodoContainer";

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editingId !== null && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    if (editingId !== null) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId ? { ...todo, title: title.trim() } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo: ITodo = {
        id: Date.now(),
        title: title.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setTitle("");
  };

  const handleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
    }
  };

  const handleDeleteAll = () => {
    setTodos([]);
    localStorage.removeItem("todos");
    setEditingId(null);
    setTitle("");
  };

  const handleEdit = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (!todoToEdit) return;
    setTitle(todoToEdit.title);
    setEditingId(id);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 p-4 flex items-center justify-center flex-col">
      <div className="w-full max-w-2xl">
        <TodoContainer
          inputRef={inputRef}
          todos={todos}
          title={title}
          isEditing={editingId !== null}
          handleSubmit={handleSubmit}
          handleTitleChange={handleTitleChange}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <button
        onClick={handleDeleteAll}
        className="bg-cyan-600 text-white font-medium p-2 rounded-xl border border-cyan-900 hover:border-white transition-all mt-5 px-10 cursor-pointer"
      >
        Apagar todos
      </button>
    </div>
  );
};

export default TodoPage;
