export default class Stepan {
    static createElement(element, parent, attributes = {}) {
        let isHTML = (function () {
            var unknown = '[object HTMLUnknownElement]', overrides = {CANVAS: 1, VIDEO: 1};
            return function (tag) {
                return overrides[tag = tag.toUpperCase()] || (!overrides.hasOwnProperty(tag) && (overrides[tag] = (document.createElement(tag).toString() !== unknown)));
            };
        })();
        if (!isHTML(element)) {
          throw new StepanError('invalid name!')
        }
        const newElement = document.createElement(element);

        const {innerHTML, innerText} = attributes;

        for (let attribute in attributes) {
            if (['innerHTML', 'innerText'].includes(attribute)) {
                continue;
            }

            newElement.setAttribute(attribute, attributes[attribute]);
        }

        innerHTML && (newElement.innerHTML = innerHTML);
        innerText && (newElement.innerText = innerText);

        parent.appendChild(newElement);

        return newElement;
    }

    static Component = class {
        constructor(parent) {
            this.parent = parent;
            if (typeof parent === 'undefined' || parent === null) {
                throw new StepanError();
            }
        }

        // TODO (Bonus): Ensure that every component returns a top-level root element
    }
}

class StepanError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, StepanError)
        }
        this.name = 'StepanError'
    }
}