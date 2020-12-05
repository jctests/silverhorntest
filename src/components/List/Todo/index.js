import { deleteTodo, toggleTodo } from "src/rootReducer";
import { connect } from "react-redux";
import Todo from "./Todo";

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
};

export default connect(null, mapDispatchToProps)(Todo);
