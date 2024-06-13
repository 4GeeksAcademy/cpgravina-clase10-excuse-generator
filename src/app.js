/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = [
    "My colleague",
    "My boss",
    "My supervisor",
    "The client",
    "The English teacher"
  ];
  let action = ["borrowed", "took", "drank", "changed", "tried", "ate"];
  let what = [
    "my meeting notes",
    "my laptop",
    "my coffee",
    "my lunch",
    "my snacks"
  ];
  let when = [
    "during the meeting",
    "during the stand-up",
    "while I was eating my lunch",
    "during my break",
    "outside of my working hours"
  ];

  function getRandomElement(listOfElements) {
    let element =
      listOfElements[Math.floor(Math.random() * listOfElements.length)];
    return element;
  }

  document.getElementById("excuse").innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);
};
