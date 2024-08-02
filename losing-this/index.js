"use strict"

const bindText = "I work as intended, because of bind(). Count is: ";
const arrowText = "I work as intended, because of arrow function. Count is: ";
const brokenText = "I don't work properly :( Count is: ";

class Button {
	constructor(text) {
		this.text = text;
		this.count = 0;
		this.button = document.createElement("button");
		this.button.innerText = text + this.count;
		this.button.style.padding = "10px";
		this.button.style.margin = "10px";
		document.body.appendChild(this.button);

		// BIND FUNCTION: bind this to the instance
		if (text == bindText) {
			this.name = "bindButton";
			this.increment = this.increment.bind(this);
			this.button.addEventListener("click", this.increment);
		}
		// ARROW FUNCTION: inherits this from the outer scope (the instance scope)
		if (text == arrowText) {
			this.name = "arrowButton";
			this.button.addEventListener("click", () => this.increment());
			// The method can be also directly declared as increment = () => {...}
		}
		// BROKEN: this is referring to the addEventListener() context
		if (text == brokenText) {
			this.name = "brokenButton";
			this.button.addEventListener("click", this.increment);
		}
	}
	increment() {
		this.count += 1;
		this.button.innerText = this.text + this.count;
	}
}

const bindButton = new Button(bindText);
const arrowButton = new Button(arrowText);
const brokenButton = new Button(brokenText);
