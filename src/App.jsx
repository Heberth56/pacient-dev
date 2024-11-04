import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Some from "./pages/Some";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example" element={<Example />} />
      <Route path="/some" element={<Some />} />
    </Routes>
  );
}

export default App;
