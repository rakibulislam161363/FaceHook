import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegistationPage from "./pages/RegistationPage"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element ={<HomePage />} />
      <Route path="/login" element ={<LoginPage />} />
      <Route path="registation" element ={<RegistationPage />} />
      <Route path="/*" element ={<NotFoundPage />} />
     </Routes>
    </>
  )
}

export default App
