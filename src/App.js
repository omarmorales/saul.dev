import React from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Main />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
