import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};





// import { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = (props) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.ali}</ThemeContext.Provider>;
// };

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };



// // App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from '../src/context/AuthContext';
// import { ThemeProvider } from '../src/context/ThemeContext';
// import Login from '../src/components/Login/Login';
// import Home from '../src/components/Home/Home';
// import Registration from '../src/components/Register/Registration';

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <ThemeProvider abebe={<Home />}>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             {/* Home is now passed as abebe instead of using children */}
//             <Route path="/home" element={<Home />} />
//             <Route path="/register" element={<Registration />} />
//           </Routes>
//         </ThemeProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


