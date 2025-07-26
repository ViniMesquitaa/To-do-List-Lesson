import type { ChangeEvent } from "react";

interface InputUIProp {
  name: string;
  placeholder: string;
  type: "password" | "text";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputUI: React.FC<InputUIProp> = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 outline-none transition-colors"
    />
  );
};
