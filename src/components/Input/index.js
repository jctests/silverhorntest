import { connect } from "react-redux";
import { addTodo } from "src/rootReducer";
import Input from "./Input";

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(Input);
