const inquirer = require("inquirer");
const Battle = require(`${__dirname}/../classes/battle.js`);
const Trainer = require(`${__dirname}/../classes/trainer.js`);
const {
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require(`${__dirname}/../classes/pokemons.js`);
const Pokeball = require(`${__dirname}/../classes/pokeball.js`);

const battleQuestion = [
  {
    type: "input",
    name: "name",
    message: "Trainer 1, what is your name?",
    default: "Ash",
  },
  {
    type: "list",
    name: "pokemon",
    message: "Which pokemon do you choose?",
    choices: [
      Eevee,
      Flareon,
      Vaporeon,
      Leafeon,
      Charmander,
      Squirtle,
      Bulbasaur,
      Rattata,
    ],
  },
];
const fightChoice = [
    {
      type: "list",
      name: "name",
      message: "Do you want to fight?",
      choices: ['yes', 'no']
    }
]
let battleInstance = {};

function playGame() {
  inquirer
    .prompt(battleQuestion)
    .then(function (battleAnswers) {

      battleInstance = new Battle(
        battleAnswers.name,
        battleAnswers.pokemon
      );
      
      return 
    })
    .then(function (turnPokemon) {

    });
}


playGame()
