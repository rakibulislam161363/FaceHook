import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistationPage from "./pages/RegistationPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { useState } from "react";
import PrivetRoute from "./providers/Routs/PrivetRoute";
function App() {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route element= {<PrivetRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="registation" element={<RegistationPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
