import React from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { 
  BrowserRouter as Router
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        type: 'dark',
      },
    }),
    [],
  );

  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Main />
          <ScrollToTop />
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
