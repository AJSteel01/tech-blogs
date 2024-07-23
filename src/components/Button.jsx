function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg font-semibold ${bgColor} ${textColor} ${className} 
        hover:bg-opacity-80 transition duration-300 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
