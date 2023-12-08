import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '../src/context/AuthContext';
import { ThemeProvider } from '../src/context/ThemeContext';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Registration from '../src/components/Register/Registration';

function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
         <ThemeProvider>
        <Home />
        </ThemeProvider>
        } />
        <Route path="/register" element={<Registration />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  
  
   
  )
}

export default App
