function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;