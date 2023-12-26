/* var currentWeapon=0;
var xp = 0;
var health = 100;
var gold = 50; */

let currentWeapon=0;
let xp = 0;
let health = 100;
let gold = 50;
let fighting;
let monsterHealth;
// let inventory = "stick";
let inventory = ["stick"];
/* JavaScript interacts with the HTML using the Document Object Model, 
or DOM. The DOM is a tree of objects that represents the HTML.
 You can access the HTML using the document object, 
 which represents your entire HTML document.

One method for finding specific elements in your HTML is using the querySelector() method. 
The querySelector() method takes a CSS selector as an argument and returns the first element 
that matches that selector. */

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterName = document.querySelector("#monsterName");
const monsterStats = document.querySelector("#monsterStats");
const monsterHealthText = document.querySelector("#monsterHealth");

//Initialize buttons~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~