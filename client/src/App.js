// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import FormNewPokemon from "./pages/FormNewPokemon/FormNewPokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/newpokemon" element={<FormNewPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
