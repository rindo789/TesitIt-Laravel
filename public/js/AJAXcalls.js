/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/AJAXcalls.ts ***!
  \***********************************/


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var test_id = document.querySelector('#test_num');

function schedule() {
  var formData = new FormData();
  var x = document.getElementById("start_date");
  formData.append('start_date', x.value);
  x = document.getElementById("start_time");
  formData.append('start_time', x.value);
  x = document.getElementById("end_date");
  formData.append('end_date', x.value);
  x = document.getElementById("end_time");
  formData.append('end_time', x.value);
  fetch("/test/".concat(test_id.value, "/schedule"), {
    method: 'POST',
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
    },
    body: formData
  }).then(function (response) {
    if (response.status == 200) {
      var statusFlash = document.getElementById("status-message");
      statusFlash.style.color = "green";
      statusFlash.innerText = "Test has been succesfully scheduled";
      setTimeout(function () {
        statusFlash.innerHTML = "";
      }, 4000);
    } else {
      var statusFlash = document.getElementById("status-message");
      statusFlash.style.color = "red";
      statusFlash.innerText = "There was an error in test scheduling!";
      setTimeout(function () {
        statusFlash.innerHTML = "";
      }, 4000);
    }
  });
}

var button = document.getElementById('schedule_button');
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
  schedule();
});
var groupClicks = document.querySelectorAll('#settingGroup input[type="checkbox"]');
var groupButton = document.getElementById('group_button');
groupButton.addEventListener('click', function () {
  var idTray = [];

  var _iterator = _createForOfIteratorHelper(groupClicks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var box = _step.value;

      if (box.checked == true) {
        idTray.push(box.value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var jsonification = JSON.stringify(idTray);
  fetch("/test/".concat(test_id.value, "/groups"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
    },
    body: jsonification
  }).then(function (response) {
    if (response.status == 200) {
      var statusFlash = document.getElementById("status-message-group");
      statusFlash.style.color = "green";
      statusFlash.innerText = "Success!";
      setTimeout(function () {
        statusFlash.innerHTML = "";
      }, 4000);
    } else {
      var statusFlash = document.getElementById("status-message-group");
      statusFlash.style.color = "red";
      statusFlash.innerText = "Failed!";
      setTimeout(function () {
        statusFlash.innerHTML = "";
      }, 4000);
    }
  });
});
/******/ })()
;