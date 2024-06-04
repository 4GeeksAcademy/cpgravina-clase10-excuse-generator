/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "My colleague",
    "My boss",
    "My supervisor",
    "A bird",
    "The English teacher"
  ];
  let action = ["borrowed", "took", "edited", "changed", "denied"];
  let what = [
    "my meeting notes",
    "my laptop",
    "my coffee",
    "my lunch",
    "the snacks"
  ];
  let when = [
    "during the meeting",
    "during the stand-up",
    "while I was eating my lunch",
    "during my break",
    "outside of my working hours"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
