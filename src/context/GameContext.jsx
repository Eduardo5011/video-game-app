import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const GameContext = createContext();

export const useGames = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
      throw new Error('useGames must be used within a GameProvider');
    }
    return context;
  };

export const GameProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:3000/genres");
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGenres();
    fetchGames();
  }, []);
  return (
    <GameContext.Provider value={{ genres, games }}>
      {children}
    </GameContext.Provider>
  );
};
