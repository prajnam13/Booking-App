import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/list";
import Hotel from "./pages/hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/id"element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
