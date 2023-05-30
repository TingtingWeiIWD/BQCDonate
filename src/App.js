import { Routes, Route } from "react-router-dom";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Support />} />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
