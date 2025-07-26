interface ButtonUIProp {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const ButtonUI: React.FC<ButtonUIProp> = ({
  children,
  type = "button",
  onClick,
  className = "w-full bg-cyan-500 hover:bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 ${}",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
