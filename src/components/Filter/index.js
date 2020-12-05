import { connect } from "react-redux";
import { fetchTodos } from "src/rootReducer";
import Filter from "./Filter";

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(null, mapDispatchToProps)(Filter);
