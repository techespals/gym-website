function Button({
  children,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      className={`primary-btn ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;