const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Defining a route to handle GET requests.
app.get("/coingecko", async (req, res) => {
    try {
        // Making a GET request to the Coingecko API
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        
        // sending data from response as JSON
        res.json(response.data);
    } catch (error) {
        // Handling errors
        const errorMessage = 'Error fetching Coingecko data: ' + error.message;
        console.error(errorMessage);

        // Sending error response with a message
        res.status(500).json({ error: errorMessage });
    }
});

// Starting the Express.js server and setting port(5000) declared above.
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


