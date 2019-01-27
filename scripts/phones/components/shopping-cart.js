export default class ShopCart {
    constructor({element}) {
        this._element = element;
        this._products = {
            "4": {
                name: "ololo",
                qty: 3;
            }
        };
        this._element.innerHTML = this.HTML;
    }

    addProduct({id, name}) {
        if (this._products[id]) {
            this._products[id].qty++;
        } else {
            this._products[id] = {
                name: name,
                qty: 1
            };
        }
    }

    _render () {
        this._html =`
        <ul> 
            ${for (item )}
        </ul>    `;
    }

    get HTML () {
        if (!this._html) {
            this._render();
        }
        return this._html;
    }

    get element () {
        return this._element;
    }
}