require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());

const RAWG_BASE_URL = "https://api.rawg.io/api";
const axiosInstance = axios.create({
  baseURL: RAWG_BASE_URL,
});



app.get('/genres', async (req, res) => {
    try {
        const response = await axiosInstance.get(`/genres?key=${process.env.VITE_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error occurred while fetching genres');
    }
});


app.get('/games', async (req, res) => {
    try {
        const response = await axiosInstance.get(`/games?key=${process.env.VITE_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error occurred while fetching genres');
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});