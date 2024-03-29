import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (genreId) {
      fetchGenreById(genreId);
    }
  }, [genreId]);

  useEffect(() => {
    fetchGenresList();
    fetchAllGames();
  }, []);

  const fetchGenreById = useCallback(
    async (genreId) => {
      console.log("fetchGenreById called with genreId:", genreId);

      if (!genreId) {
        console.error("No genre ID provided");
        return;
      }

      try {
        const response = await axios.get(
          `https://videogame-0hg9.onrender.com/api/games/${genreId}`
        );

        setGamesByGenre(response.data);
        // Adjust based on the actual response structure
      } catch (error) {
        console.error("Error fetching gameId:", error);
      }
    },
    [setGamesByGenre]
  );
  //Search for games
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://videogame-0hg9.onrender.com/games/search?query=${searchTerm}`
      );
      setSearchResults(response.data);
      console.log("Search results:", response.data); // Update the search results state
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Optionally handle errors in a more specific way
    }
  };

  const fetchGenresList = async () => {
    try {
      const response = await axios.get(
        "https://videogame-0hg9.onrender.com/genres"
      );

      setGenres(response.data);
    } catch (error) {
      console.error("Error fetching genres:", error);
      console.log(error.response);
    }
  };

  const fetchAllGames = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://videogame-0hg9.onrender.com/games"
      );
      setGamesByGenre(response.data);
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
      console.log(error.response);
    }
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        genres,
        genreId,
        setGenreId,
        gamesByGenre,
        handleSearch,
        setSearchTerm,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
