import Component from '../../component.js';
import PhoneCard from './phone-card.js'

export default class PhoneCatalog extends Component {
    constructor({element, phones, onPhoneSelected, shopCart}) {
        super({element});
        this._shopCart = shopCart;
        this._phonesData = phones;
        this._phonesCards = [];
        this._initPhoneCard();
        this._visiblePhoneCards = this._phonesCards.slice();
        this._onPhoneSelected = onPhoneSelected;
        this._render();
        // this._element.addEventListener('click', ev => {
        //     this._onPhoneClick(ev);
        // });
        this._initEvents();
    }

    _initEvents () {
        this._element.addEventListener('click', ev => {
            let target = ev.target;
            if (target.classList.contains('phones__btn-buy-wrapper') || target.classList.contains('btn')) {
                let phone = target.closest('[data-element="phone"]');
                this.addToCart(phone.getAttribute('data-phone-id'), phone.getAttribute('data-phone-name'));
                return;
            }
            this._onPhoneClick(ev);
        });
    }

    _initPhoneCard () {
        this._phonesData.forEach( item => {
            this._phonesCards.push(new PhoneCard({
                element: document.createElement('li'),
                phoneData: item,
            }));
        })
    }

    sort(type) {
        if (type === 'name') {
            this._visiblePhoneCards.sort((a, b) => {
                return (a.name > b.name) ? 1 : -1;
            });
        }
        if (type === 'age') {
            this._visiblePhoneCards.sort( (a, b) => (a.age - b.age));
        }
        this._render();
    }

    search(value) {
        this._visiblePhoneCards = this._phonesCards.filter( (item) => ~item.name.toLowerCase().indexOf(value.toLowerCase()));
        this._render();
    }

    addToCart(id, name) {
        this._shopCart.addProduct({
            id: id,
            name: name
        });
    }

    _onPhoneClick(ev) {
        const phoneElement = ev.target.closest('[data-element="phone"]');
        if (!phoneElement) {
            return;
        }

        this._onPhoneSelected(phoneElement.dataset.phoneId)
    }

    _render() {
        this._element.innerHTML= `
        <ul class="phones">
        </ul>`;
        this._visiblePhoneCards.forEach(phone => this._element.querySelector('.phones').appendChild(phone.element))
    }
}
