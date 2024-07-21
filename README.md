
# Gotta fetch() 'Em All / Pokemon battle
Welcome to the Gotta fetch() 'Em All project repository! Here, you will embark on an exciting journey into the world of Pokémon using the PokéApi. This project allows you to explore locations, encounter Pokémon, and engage in battles right from your browser.

## Installation
* Clone the repository: git clone <git@github.com:CodecoolGlobal/gotta-fetch-em-all-react-arvamartin.git>
* Install dependencies: npm install
* Start the development server: npm start
* Open your browser and navigate to http://localhost:5173 to view the application.

# Project Description
In this project, you will create a web application that interacts with the PokéApi to accomplish the following tasks:

### Show Locations and Encounter Pokémon
* Display the first 20 locations where Pokémon can be found.
* Clicking on a location fetches a random Pokémon encounter from that location.
* Display the encountered Pokémon's name and sprite on the page.

### Start a Pokémon Battle
* Choose one of your Pokémon to battle against the encountered Pokémon.
* Display both Pokémon's names and sprites.
* Implement turn-based attacks until one Pokémon's HP reaches 0.

### Capture or End Encounter
* If the encountered Pokémon's HP reaches 0, capture it and add it to your Pokémon collection.
* If your Pokémon's HP reaches 0 first, the encounter ends.
* After the encounter, display available locations again for further exploration.


## Technologies Used
* React: Front-end framework for building the user interface.
* JavaScript (ES6+): Language used for application logic.
* Fetch API: Used for making asynchronous HTTP requests to the PokéApi.
* CSS: Styling elements for a pleasant user experience.

## Project Structure
* /src/components: Contains React components (Main.jsx, Pokemons.jsx, Battle.jsx) for different parts of the application.
* /src/index.jsx: Entry point of the application.
* /public: Contains index.html and other static assets.

## How to Contribute
* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature-name).
* Commit your changes (git commit -am 'Add some feature').
* Push to the branch (git push origin feature/your-feature-name).
* Create a new Pull Request.

This README provides a brief overview of the project and guides you through setting up the environment to start working on and exploring the exciting world of Pokémon. Happy coding and may you catch 'em all! 🚀
