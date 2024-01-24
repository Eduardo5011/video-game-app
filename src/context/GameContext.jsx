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
  const [fetchGenreId, setFetchGenreId] = useState([]);
  

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

    const fetchGenreById = async (genreId) => {
      try {
         
          const response = await axios.get(`http://localhost:3000/api/games/${genreId}`);
          setFetchGenreId(response.data.results); // Adjust based on the actual response structure
      } catch (error) {
          console.error('Error fetching games:', error);
      }
  };


  fetchGenreById()
    fetchGenresList();
    fetchAllGames();
  }, []);

  return (
    <GameContext.Provider value={{ games, genres, fetchGenreId }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
