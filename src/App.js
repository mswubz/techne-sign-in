import './App.css';
import Signup from './components/Signup';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Signup />
      </div>
    </ThemeProvider>
  );
}

export default App;
