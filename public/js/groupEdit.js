/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/groupEdit.ts ***!
  \***********************************/
 //If flash confirm message exists hide it after 4s

if (document.getElementById('confirm')) {
  var flash = document.getElementById('confirm');
  setTimeout(function () {
    flash.style.display = "none";
  }, 4000);
} //Add a delete self function to all buttons in a student card


var buttons = document.querySelectorAll('.student_card button');
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var x = button.parentElement;
    x.remove();
  });
}); //Add a funtion to a button to add another student card

var addButton = document.getElementById("add_student");
addButton.addEventListener("click", function () {
  var parent = document.createElement('div');
  var htmlstring = "<input type='text' name='student[]' placeholder='Zadajte meno študenta'><p style='display: inline'></p>";
  htmlstring.trim();
  parent.className = "student_card";
  parent.innerHTML = htmlstring;
  var deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerText = "🗑";
  deleteButton.addEventListener("click", function () {
    var x = deleteButton.parentElement;
    x.remove();
  });
  var insertHere = document.getElementById("sub_button");
  insertHere === null || insertHere === void 0 ? void 0 : insertHere.insertAdjacentElement("beforebegin", parent);
  parent.insertAdjacentElement("beforeend", deleteButton);
});
/******/ })()
;