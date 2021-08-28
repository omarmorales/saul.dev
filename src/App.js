import React from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { 
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <Navbar />
        <Main />
        <ScrollToTop />
      </Router>
    </React.Fragment>
  );
}

export default App;
