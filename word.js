// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require("prompt");
// Using the require keyword lets us access all of the exports in our word.js file
var letter = require("./letter.js");

var wordSelection = ["trace scheduling", "fortran", "formatting objects processor",
    "fourier transform", "high level assembly", "instruction set architecture",
    "sparse conditional constant propagation", "design compiler"
];

// randomized word chosen from wordOptons[]
var chosenWord = "";

// number of "__ __"  so when I call placeHolder I can have it === "__"
var spaceHolder = "__";

// split word and store in var
var lettersInWord = [];

// constructor function used to create objects
function Word(chosenWord, spaceHolder, lettersInWord) {
    this.chosenWord = chosenWord;
    this.spaceHolder = spaceHolder;
    this.lettersInWord = lettersInWord;
};
// placeholders for all words in wordSelection - starts each game
Word.prototype.placeHolder = function() {

    this.chosenWord = wordSelection[Math.floor(Math.random() * wordSelection.length)];
    this.lettersInWord = chosenWord.split("");
    this.spaceHolder = lettersInWord.length;

    // based on # of letters in chosenWord.
    for (var i = 0; i < lettersInWord.length; i++) {
        spaceHolder += lettersInWord.length;
    }
    console.log(this.spaceHolder);
};

