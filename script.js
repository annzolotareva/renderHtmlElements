"use strict";
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.render = function (elem) {
    if (selector[0] == ".") {
      elem = document.createElement("div");
      elem.classList.add(selector);
    } else if (selector[0] == "#") {
      elem = document.createElement("p");
      elem.id = selector;
    }
    elem.style.cssText = ` height: ${height}, this.width: ${width}, this.background-color: ${bg}, this.fontSize: ${fontSize} `;
    elem.innerText = "DomElement";
  };
};

const domElement1 = new DomElement("#first", 10, 10, "yellow", 5);

domElement1.render();
