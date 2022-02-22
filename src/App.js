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
  
  // Parte responsável por verificar o tema e seta o tema.

  const [theme, setTheme] = usePersistedState('theme', light)

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light )
  }
  
  return (
    // Componente que provem os temas da aplicação.
    <ThemeProvider theme={theme}>
      {/* Componente responsável por definir os estilos globais da aplicação. */}
      <GlobalStyle/>
       {/* Rotas da aplicação */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login toogleTheme={toogleTheme}/>}></Route>
          <Route path="/Home" element={<Home toogleTheme={toogleTheme}/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
