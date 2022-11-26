import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to Analyze below' mode={mode}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

