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
    elem.style.cssText = ` height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize} `;
    elem.innerText = "Dom Element";
    document.body.append(elem);
  };
};

const domElement1 = new DomElement(".first", 12 + "%", 17 + "%", "yellow", 50 + "px");

domElement1.render();
