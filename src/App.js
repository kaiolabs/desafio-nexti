import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import light from './components/themes/light'; 
import dark from './components/themes/dark';
import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

function App() {
  
  const [theme, setTheme] = usePersistedState('theme', light)

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light )
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login toogleTheme={toogleTheme}/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
