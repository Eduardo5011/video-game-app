import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const GameContext = createContext();

export const useGames = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGenresList = async () => {
      try {
        const response = await axios.get("http://localhost:3000/genres");
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
        console.log(error.response);
      }
    };

    const fetchAllGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
        console.log(error.response);
      }
    };
    fetchGenresList();
    fetchAllGames();
  }, []);

  return (
    <GameContext.Provider value={{ games, genres }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
