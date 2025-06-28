const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-red-600 text-white hover:bg-blue-700 transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
