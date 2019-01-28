import Component from '../../component.js';
import PhoneCard from './phone-card.js'

export default class PhoneCatalog extends Component {
    constructor({element, phones, onPhoneSelected, shopCart}) {
        super({element});
        this._phonesData = phones;
        this._phonesCards = [];
        this._initPhoneCard(shopCart);
        this._onPhoneSelected = onPhoneSelected;
        this._render();
        this._element.addEventListener('click', ev => {
            this._onPhoneClick(ev);
        });
    }

    _initPhoneCard (shopCart) {
        this._phonesData.forEach( item => {
            this._phonesCards.push(new PhoneCard({
                element: document.createElement('li'),
                phoneData: item,
                shopCart: shopCart
            }));
        })
    }

    sort(type) {
        if (type === 'name') {
            this._phonesCards.sort((a, b) => {
                return (a.name > b.name) ? 1 : -1;
            });
        }
        if (type === 'age') {
            this._phonesCards.sort( (a, b) => (a.age - b.age));
        }
        this._render();
    }

    _onPhoneClick(ev) {
        // let target = ev.target;
        //
        // const phoneElement = ev.target.closest('[data-element="phone"]');
        // if (!phoneElement) {
        //     return;
        // }
        //
        // this._onPhoneSelected(phoneElement.dataset.phoneId)
    }

    _render() {
        this._element.innerHTML= `
        <ul class="phones">
        </ul>`;
        this._phonesCards.forEach(phone => this._element.querySelector('.phones').appendChild(phone.element))
    }
}
