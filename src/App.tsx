import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
