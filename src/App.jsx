import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
// css
import "./pages/css/auth.css";
import "./component/Loader/Loader.css";
import "./pages/css/nav.css";
import "./pages/css/userDashBoard.css";

// Pages
import { Signup } from "./pages/auth/Signup";
import { NotFound } from "./pages/generalRoutes/NotFound";
import { UserDashboard } from "./pages/generalRoutes/UserDashboard";
import { Navigation } from "./pages/generalRoutes/Navigation";
import { useEffect, useState } from "react";

function App() {
  // states
  const [hideNav, setHideNav] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    if (path !== "/") {
      setHideNav(true);
    }
  }, []);

  //
  return (
    <>
      {hideNav && <Navigation />}

      <Routes>
        <Route path="/userdashboard" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
