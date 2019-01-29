export default class ShopCart {
    constructor({element}) {
        this._element = element;
        this._products = {};
        this._element.innerHTML = this.HTML;
        this._initEvents();
    }

    _initEvents() {
        this._element.addEventListener('click', (ev) => {
            let target = ev.target;
            if (target.classList.contains('delete-product-btn')) {
                let product = target.closest('[data-element="cart-element"]');
                this.deleteProduct(product.getAttribute('data-phone-id'));
            }
        });
    }

    deleteProduct(id) {
        this._products[id].qty--;
        if (this._products[id].qty === 0) {
            delete this._products[id];
        }
        this._render();
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
        this._render();
        this._element.innerHTML = this.HTML;
    }

    _render () {
        this._html =`
        <ul> 
            ${[].reduce.call(Object.keys(this._products), (acc, item) => {
                acc+=`<li data-element="cart-element"
                          data-phone-id="${item}">
                          <span>${this._products[item].name}${this._products[item].qty === 1 ? '' : ` (${this._products[item].qty})`}
                          </span><span class="delete-product-btn" data-element="delete-product-btn">✘</span></li>`;
                return acc;
        }, ``)}
        </ul>`;
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