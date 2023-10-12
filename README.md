## Installation

To run this application, you'll need Node.js and npm installed on your machine.

1. Clone this repository to your local machine:

git clone https://github.com/ShamsTanweer/Analystt.ai-assignment.git


Install the project dependencies:

Go to client folder and run:

npm install

Running the Application:

After the installation is complete, you can start the development server using the following command:

npm start


Open your web browser and visit http://localhost:3000 


Go to server folder and run command:

npm install

Running the Application:

After the installation is complete, you can start the development server using the following command:

npm run dev

This application uses data from the CoinGecko API to fetch information about cryptocurrencies. The main API endpoint used is:

(http://localhost:5000/coingecko)

This endpoint provides data about the top 100 cryptocurrencies, including their names, symbols, current prices, market caps, and more. The application fetches this data and displays it on the web page for your convenience.

Note that this API is accessed locally when you run the application, so make sure the application server is running (typically on port 5000) for the API to work correctly.
How to Use
On the application's main page, you'll see a list of cryptocurrencies fetched from the CoinGecko API.

You can use the search bar to filter the cryptocurrencies by name or symbol. Just start typing, and the list will be filtered accordingly.

The data is displayed in a paginated format. Use the pagination component at the bottom of the page to navigate between different pages of cryptocurrency data.

Error Handling
If there is an error while fetching data from the CoinGecko API, an error message will be displayed on the page.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

License
This project is licensed under the MIT License. You can find the license information in the LICENSE file.