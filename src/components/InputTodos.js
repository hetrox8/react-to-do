const InputTodo = ({ handleSubmit, message }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        {/* ... */}
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
