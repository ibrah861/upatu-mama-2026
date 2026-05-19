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
import { UserDashboard } from "./pages/protectedRoutes/UserDashboard";
import { Payment } from "./pages/protectedRoutes/Payment";
import { History } from "./pages/protectedRoutes/History";
import { Invoice } from "./pages/protectedRoutes/Invoice";
import { Navigation } from "./pages/generalRoutes/Navigation";

import { Reducer } from "./pages/auth/Reducer";
import { useEffect, useState } from "react";

function App() {
  // states
  const [hideNav, setHideNav] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    if (path !== "/userdashboard") {
      setHideNav(true);
    }
  }, []);

  //
  return (
    <>
      <Routes>
        <Route path="/userdashboard" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<NotFound />} />
        <Route path="reducer" element={<Reducer />} />

        <Route path="/" element={<UserDashboard />} />
      </Routes>
      {hideNav && <Navigation />}
    </>
  );
}

export default App;
