import { connect } from "react-redux";
import { fetchTodos } from "src/rootReducer";
import List from "./List";

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
