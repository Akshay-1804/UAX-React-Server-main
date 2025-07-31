import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/globalContext';
import { ThemeProvider } from './context/ThemeContext';

import { Pages } from './pages';

import './App.css';
import './assets/stylesheet/mobile.css';

function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Router>
          <Pages />
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
