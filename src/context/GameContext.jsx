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
  const [genreId, setGenreId] = useState(null);
  const [gamesByGenre, setGamesByGenre] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (genreId) {
      fetchGenreById(genreId);
    }
  }, [genreId]);

  const fetchGenreById = async (genreId) => {
    console.log("fetchGenreById called with genreId:", genreId);

    if (!genreId) {
      console.error("No genre ID provided");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/games/${genreId}`
      );

      setGamesByGenre(response.data); // <== need or don't need COME BACK
      // Adjust based on the actual response structure
    } catch (error) {
      console.error("Error fetching gameId:", error);
    }
  };

//Search for games
  const handleSearch = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/games/search?query=${searchTerm}`);
        setSearchResults(response.data); 
        console.log('Search results:', response.data); // Update the search results state
    } catch (error) {
        console.error('Error fetching search results:', error);
        // Optionally handle errors in a more specific way
    }
};

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
        setGamesByGenre(response.data);
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
    <GameContext.Provider
      value={{ games, genres, genreId, setGenreId, gamesByGenre, handleSearch, setSearchTerm, searchResults }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
