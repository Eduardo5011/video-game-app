require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
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



app.get('/games/:genreId', async (req, res) => {
  try {
      const genreId = req.params.genreId;
      const response = await axiosInstance.get(`/games`, {
          params: {
              key: process.env.RAWG_API_KEY,
              genres: genreId
          }
      });

      res.json(response.data);
  } catch (error) {
      console.error("Error occurred while fetching games:", error);
      res.status(500).send('Error occurred while fetching games by genre');
  }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});