require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors({
    origin: ['http://localhost:5173', 'https://video-game-list.netlify.app']
    
  }));

const RAWG_BASE_URL = "https://api.rawg.io/api";
const axiosInstance = axios.create({
  baseURL: RAWG_BASE_URL,
});



app.get('/genres', async (req, res) => {
    try {
        const response = await axiosInstance.get(`/genres?key=${process.env.RAWG_API_KEY}`);
        const genreData = response.data.results; 
        res.json(genreData);
    } catch (error) {
        console.error("Error occurred while fetching genres:", error);

        // Send more informative error messages
        if (error.response) {
          // RAWG API response error
          res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
          // No response received
          res.status(500).send('No response received from RAWG API');
        } else {
          // Other errors
          res.status(500).send('Server error occurred');
        }
        
    }
});


app.get('/games', async (req, res) => {
    try {
        const response = await axiosInstance.get(`/games?key=${process.env.RAWG_API_KEY}`);
        const gameData = response.data.results
        res.json(gameData);
     
    } catch (error) {
        console.error("Error occurred while fetching games:", error);

        // Send more informative error messages
        if (error.response) {
          // RAWG API response error
          res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
          // No response received
          res.status(500).send('No response received from RAWG API');
        } else {
          // Other errors
          res.status(500).send('Server error occurred');
        }
    }
});



app.get('/api/games/:genreId', async (req, res) => {

  const genreId = req.params.genreId;
    if (!genreId) {
        return res.status(400).send('No genre ID provided');
    }
  try {
      const genreId = req.params.genreId;
      const response = await axiosInstance.get(`/games`, {
          params: {
              key: process.env.RAWG_API_KEY,
              genres: genreId
          }
      });

      res.json(response.data.results);
  } catch (error) {
      console.error("Error occurred while fetching games:", error);
      res.status(500).send('Error occurred while fetching games by genre');
  }
});

// search for games
app.get('/games/:search', async (req, res) => {
  const searchTerm = req.query.query; // Use 'query' as the query parameter name
  if (!searchTerm) {
      return res.status(400).send('Search term is required');
  }

  try {
      const response = await axiosInstance.get(`/games?key=${process.env.RAWG_API_KEY}&search=${searchTerm}`);
      const searchData = response.data.results; // Assuming the results are in 'results'
      res.json(searchData);
  } catch (error) {
      console.error("Error occurred while searching games:", error);

      if (error.response) {
          // RAWG API response error
          res.status(error.response.status).send(error.response.data);
      } else if (error.request) {
          // No response received
          res.status(500).send('No response received from RAWG API');ch
      } else {
          // Other errors
          res.status(500).send('Server error occurred');
      }
  }
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});