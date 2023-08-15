import Header from "./Header";
import TodosLogic from "../TodosLogic";
const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todo">  
      <Header />
      <TodosLogic />
      
      </div>
     </div>
  );
};
export default TodoApp;
