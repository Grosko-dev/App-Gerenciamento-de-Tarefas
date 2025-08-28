function Button({ props }) {
  return (
    <button
      className="bg-blue-500 text-white p-2 px-4 py-2 rounded-md font-medium"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
