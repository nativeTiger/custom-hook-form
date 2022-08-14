import { Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./auth";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
