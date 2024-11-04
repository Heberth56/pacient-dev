import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
}

export default App;
