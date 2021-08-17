import Container from "@material-ui/core/Container";
import Home from "./components/home/components/Home";
import AddTodo from "./components/home/components/AddTodo"
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Container fixed>
          {/* <Home/> */}
          <Route path="/" exact component={Home} />
          <Route path="/addTodo" component={AddTodo}/>
        </Container>
      </div>
    </Router>
  );
}

export default App;
