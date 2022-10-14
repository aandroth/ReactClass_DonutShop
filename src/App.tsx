import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
