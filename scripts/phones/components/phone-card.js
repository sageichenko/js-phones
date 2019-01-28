export default class PhoneCard {
    constructor({element, phoneData, shopCart}) {
        this._element = element;
        //this._shopCart = shopCart;
        this._data = phoneData;
        this._element.innerHTML = this.HTML;
        this._initEvents();
    }

    _render() {
        this._html = `
        <div class="thumbnail"
             data-element="phone"
             data-phone-id="${this._data.id}"
             data-phone-name="${this._data.name}">
            <a href="#!/phones/${this._data.id}" class="thumb">
                <img alt="${this._data.name}" src="${this._data.imageUrl}">
            </a>
            <div class="phones__btn-buy-wrapper">
                <a class="btn btn-success">
                    Add
                </a>
            </div>
            <a href="#!/phones/${this._data.id}">
                ${this._data.name}
            </a>
            <p>${this._data.snippet}</p>
        </div>`;
    }

    // _render () {
    //     this._html = `
    //         <li class="thumbnail"
    //             data-element="phone"
    //             data-phone-id="${this._data.id}">
    //             <a href="#!/phones/${this._data.id}" class="thumb">
    //         <img alt="${this._data.name}" src="${this._data.imageUrl}">
    //         </a>
    //
    //         <div class="phones__btn-buy-wrapper">
    //         <a class="btn btn-success">
    //         Add
    //         </a>
    //         </div>
    //
    //         <a href="#!/phones/${this._data.id}">${this._data.name}</a>
    //
    //         <p>${this._data.snippet}</p>
    //
    //         </li>`;
    // }

    get HTML () {
        if (!this._html) {
            this._render()
        }
        return this._html;
    }

    get element () {
        return this._element;
    }

    // addToCart() {
    //     this._shopCart.addProduct({
    //         id: this._data.id,
    //         name: this._data.name
    //     });
    // }

    _initEvents() {
        // this._element.addEventListener('click', ev => {
        //     let target = ev.target;
        //     if (target.classList.contains('phones__btn-buy-wrapper') || target.classList.contains('btn')) {
        //         this.addToCart();
        //     }
        // });
    }

    get age () {
        return this._data.age;
    }

    get name () {
        return this._data.name;
    }
}