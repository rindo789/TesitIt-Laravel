/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/test.ts ***!
  \******************************/


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var settingButton = document.getElementById("settingButton");
settingButton.addEventListener("click", function () {
  var settingTab = document.getElementById("setting");
  settingTab.style.display = "flex";
});
var close_button = document.querySelector("#settingClose button");
close_button.addEventListener("click", function () {
  var settingTab = document.getElementById("setting");
  settingTab.style.display = "none";
});
var settingSide = document.getElementById("settingSide");
var settingGroup = document.getElementById("settingGroup");
var settingSchedule = document.getElementById("settingSchedule");
var children = settingSide === null || settingSide === void 0 ? void 0 : settingSide.children;
children[0].addEventListener("click", function () {
  settingGroup.style.display = "block";
  settingSchedule.style.display = "none";
});
children[1].addEventListener("click", function () {
  settingGroup.style.display = "none";
  settingSchedule.style.display = "block";
});
var test_num = document.getElementById("test_num");
var json = fetch("../../tests.json").then(function (response) {
  return response.json();
}).then(function (json) {
  //console.log(json["tests"][test_num.value]);
  //start(json["tests"][test_num.value]);
  start_two();
});
var form = document.getElementById("testForm");
var questionCount = 0;
var chooseOne = document.getElementById("ChooseOne");
chooseOne === null || chooseOne === void 0 ? void 0 : chooseOne.addEventListener("click", function () {
  new_question("one");
});
var chooseMulti = document.getElementById("ChooseMulti");
chooseMulti === null || chooseMulti === void 0 ? void 0 : chooseMulti.addEventListener("click", function () {
  new_question("multi");
});
var chooseText = document.getElementById("ChooseText");
chooseText === null || chooseText === void 0 ? void 0 : chooseText.addEventListener("click", function () {
  new_question("text");
});

function new_question(type) {
  questionCount++;
  var field = document.createElement("fieldset");
  var title = document.createElement("input");
  var addOption = document.createElement("button");
  var deleteQ = document.createElement("button");
  var optionCountPlaceholder = document.createElement("input");
  var questionCountPlaceholder = document.createElement("input");
  var typeQ = document.createElement("input");
  var numQ = questionCount;
  typeQ.type = "hidden";
  typeQ.value = type;
  typeQ.name = "question".concat(numQ, "[type]");
  field.id = "field" + questionCount;
  title.name = "question" + questionCount + "[]";
  optionCountPlaceholder.type = "hidden";
  title.type = "text";
  addOption.type = "button";
  deleteQ.type = "button";
  deleteQ.innerText = "Delete Question";
  addOption.innerText = "Add option";
  var x = 0;
  optionCountPlaceholder.value = x.toString();
  deleteQ.addEventListener("click", function () {
    var _a;

    (_a = deleteQ.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
  });
  addOption.addEventListener("click", function () {
    var container = document.createElement("div");
    var input = document.createElement("input");
    var option = document.createElement("input");
    var deleteO = document.createElement("button");
    optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value) + 1).toString();

    if (type == "one") {
      input.type = "radio";
    } else if (type == "multi") {
      input.type = "checkbox";
    } else {
      input.type = "text";
    }

    option.type == "text";
    deleteO.type = "button";
    input.name = "question".concat(numQ, "[selected][]");
    input.value = optionCountPlaceholder.value;
    option.name = "question".concat(numQ, "[options][").concat(optionCountPlaceholder.value, "]");
    deleteO.innerText = "X";
    deleteO.addEventListener("click", function () {
      var _a;

      (_a = deleteO.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
    var placehere = addOption.parentElement;
    if (type != "text") container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", input);
    container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", option);
    container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", deleteO);
    placehere === null || placehere === void 0 ? void 0 : placehere.insertAdjacentElement("beforeend", container);
  });
  form === null || form === void 0 ? void 0 : form.insertAdjacentElement("beforeend", field);
  field.insertAdjacentElement("beforeend", title);
  field.insertAdjacentElement("beforeend", addOption);
  field.insertAdjacentElement("beforeend", deleteQ);
  field.insertAdjacentElement("beforeend", optionCountPlaceholder);
  field.insertAdjacentElement("beforeend", typeQ);
}

function start_two() {
  var addOption_array = document.getElementsByClassName("construct");
  var deleteQ_array = document.getElementsByClassName("delete");
  var deleteO_array = document.getElementsByClassName("delete_option");

  var _iterator = _createForOfIteratorHelper(deleteO_array),
      _step;

  try {
    var _loop = function _loop() {
      var option = _step.value;
      option.addEventListener("click", function () {
        var myParent = option.parentElement;
        myParent === null || myParent === void 0 ? void 0 : myParent.remove();
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(deleteQ_array),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var question = _step2.value;
      question.addEventListener("click", function () {
        var myParent = question.parentElement;
        myParent === null || myParent === void 0 ? void 0 : myParent.remove();
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(addOption_array),
      _step3;

  try {
    var _loop3 = function _loop3() {
      var option = _step3.value;
      type = document.getElementsByName();
      option.addEventListener("click", function () {
        var myParent = option.parentElement;
        myParent === null || myParent === void 0 ? void 0 : myParent.remove();
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var type;

      _loop3();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  addOption.addEventListener("click", function () {
    var container = document.createElement("div");
    var input = document.createElement("input");
    var option = document.createElement("input");
    var deleteO = document.createElement("button");
    optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value) + 1).toString();

    if (type == "one") {
      input.type = "radio";
    } else if (type == "multi") {
      input.type = "checkbox";
    } else {
      input.type = "text";
    }

    option.type == "text";
    deleteO.type = "button";
    input.name = "question".concat(numQ, "[selected][]");
    input.value = optionCountPlaceholder.value;
    option.name = "question".concat(numQ, "[options][").concat(optionCountPlaceholder.value, "]");
    deleteO.innerText = "X";
    deleteO.addEventListener("click", function () {
      var myParent = deleteO.parentElement;
      myParent === null || myParent === void 0 ? void 0 : myParent.remove();
    });
    var placehere = addOption.parentElement;
    if (type != "text") container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", input);
    container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", option);
    container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", deleteO);
    placehere === null || placehere === void 0 ? void 0 : placehere.insertAdjacentElement("beforeend", container);
  });
}

function start(json) {
  for (var key in json["structure"]) {
    questionCount++;
    var field = document.createElement("fieldset");
    var title = document.createElement("input");
    var addOption = document.createElement("button");
    var deleteQ = document.createElement("button");
    var optionCountPlaceholder = document.createElement("input");
    var typeQ = document.createElement("input");
    var numQ = questionCount;
    var type = json["structure"][key]["type"];
    typeQ.type = "hidden";
    typeQ.value = type;
    typeQ.name = "question".concat(numQ, "[type]");
    field.id = "field" + questionCount;
    title.name = "question" + questionCount + "[]";
    optionCountPlaceholder.type = "hidden";
    title.type = "text";
    addOption.type = "button";
    deleteQ.type = "button";
    title.value = json["structure"][key][0];
    deleteQ.innerText = "Delete Question";
    addOption.innerText = "Add option";
    var x = 0;
    optionCountPlaceholder.value = x.toString();
    deleteQ.addEventListener("click", function () {
      var _a;

      (_a = deleteQ.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
    addOption.addEventListener("click", function () {
      var container = document.createElement("div");
      var input = document.createElement("input");
      var option = document.createElement("input");
      var deleteO = document.createElement("button");
      optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value) + 1).toString();

      if (type == "one") {
        input.type = "radio";
      } else if (type == "multi") {
        input.type = "checkbox";
      } else {
        input.type = "text";
      }

      option.type == "text";
      deleteO.type = "button";
      input.name = "question".concat(numQ, "[selected][]\"");
      input.value = optionCountPlaceholder.value;
      option.name = "question".concat(numQ, "[options][").concat(optionCountPlaceholder.value, "]");
      deleteO.innerText = "X";
      deleteO.addEventListener("click", function () {
        var _a;

        (_a = deleteO.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
      });
      var placehere = addOption.parentElement;
      if (type != "text") container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", input);
      container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", option);
      container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", deleteO);
      placehere === null || placehere === void 0 ? void 0 : placehere.insertAdjacentElement("beforeend", container);
    });
    form === null || form === void 0 ? void 0 : form.insertAdjacentElement("beforeend", field);
    field.insertAdjacentElement("beforeend", title);
    field.insertAdjacentElement("beforeend", addOption);
    field.insertAdjacentElement("beforeend", deleteQ);
    field.insertAdjacentElement("beforeend", optionCountPlaceholder);
    field.insertAdjacentElement("beforeend", typeQ);

    for (var _i = 0, _Object$entries = Object.entries(json["structure"][key]["options"]); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          name = _Object$entries$_i[0],
          item = _Object$entries$_i[1];

      var container = document.createElement("div");
      var input = document.createElement("input");
      var option = document.createElement("input");
      var deleteO = document.createElement("button");
      optionCountPlaceholder.value = (parseInt(optionCountPlaceholder.value) + 1).toString();

      if (type == "one") {
        input.type = "radio";
      } else if (type == "multi") {
        input.type = "checkbox";
      } else {
        input.type = "text";
      }

      option.type == "text";
      deleteO.type = "button";
      input.name = "question".concat(numQ, "[selected][]");
      input.value = name;

      try {
        for (var _i2 = 0, _Object$entries2 = Object.entries(json["structure"][key]["selected"]); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              index = _Object$entries2$_i[0],
              selected = _Object$entries2$_i[1];

          if (selected == name) {
            input.checked = true;
            break;
          }
        }
      } catch (error) {}

      option.name = "question".concat(numQ, "[options][").concat(optionCountPlaceholder.value, "]");
      option.value = item;
      deleteO.innerText = "X";
      deleteO.addEventListener("click", function () {
        var _a;

        (_a = deleteO.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
      });
      var placehere = addOption.parentElement;
      if (type != "text") container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", input);
      container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", option);
      container === null || container === void 0 ? void 0 : container.insertAdjacentElement("beforeend", deleteO);
      placehere === null || placehere === void 0 ? void 0 : placehere.insertAdjacentElement("beforeend", container);
    }
  }
}
/******/ })()
;