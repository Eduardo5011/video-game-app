import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { GameProvider } from "./context/GameContext";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GameProvider>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#121212]" : null
        } min-h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
        </GameProvider>
    </ThemeContext.Provider>
  );
}

export default App;
