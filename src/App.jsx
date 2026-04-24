import "./App.css";
import { Route, Routes } from "react-router-dom";

// css
import "./pages/css/auth.css";
import "./component/Loader/Loader.css";

// Pages
import { Signup } from "./pages/auth/Signup";
import { NotFound } from "./pages/generalRoutes/NotFound";

function App() {
  //
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
