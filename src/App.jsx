import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  // code for changing the mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      showAlert("Light mode enabled sucessfully", "success");
    } else {
      showAlert("Dark mode enabled sucessfully", "success");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#02294e";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDarkMode]);

  // code to set and show alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  return (
    <>
      <Router>
        <Navbar
          title="RisingSun TextUtils"
          toggleMode={toggleMode}
          isDarkMode={isDarkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                  title="RisingSun Text Analyser"
                  isDarkMode={isDarkMode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
