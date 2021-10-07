
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Artwork from "./pages/Artwork/Artwork";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/artwork" component={Artwork}/>
          <Route path="market" component={Market}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
