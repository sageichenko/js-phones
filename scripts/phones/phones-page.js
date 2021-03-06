import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from './services/phone-service.js';
import ShopCart from './components/shopping-cart.js';
import debounce from './../modules/debounce.js';

export default class PhonesPage {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initShoppingCard();
        this._initCatalog();
        this._initViewer();
        this._initEvents();
    }

    _initEvents() {
        let search = debounce(this._catalog.search.bind(this._catalog), 1000);
        this._element.addEventListener('input', (ev) => {
            let target = ev.target;
            if (target.getAttribute('data-element') === 'sort-selector')
            {
                this._catalog.sort(target.options[ev.target.selectedIndex].value);
                return;
            }
            if (target.getAttribute('data-element') === 'search-field') {
                search(target.value);
            }
        });
    }

    _initShoppingCard() {
        this._shopCart = new ShopCart({
            element: this._element.querySelector('[data-element="shopping-cart"]')
        });
    }

    _initCatalog() {
        this._catalog = new PhoneCatalog({
            element: this._element.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneService.getPhones(),
            onPhoneSelected: id => {
                this._catalog.hide();
                PhoneService.getPhone(id, this._viewer.show.bind(this._viewer));
            },
            shopCart: this._shopCart
        });
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
            prevPage: this._catalog,
            shopCart: this._shopCart
        })
    }

    _render() {
        this._element.innerHTML = `
            <div class="row">
                <!--Sidebar-->
                <div class="col-md-2">
                    <section>
                        <p>
                            Search:
                            <input data-element="search-field" type="text">
                        </p>
                        <p>
                            Sort by:
                            <select data-element="sort-selector">
                                <option value="name">Alphabetical</option>
                                <option value="age">Newest</option>
                            </select>
                        </p>
                    </section>
                    <section>
                        <p>Shopping Cart</p>
                        <div data-element="shopping-cart">
                        </div>
                    </section>
                </div>
              <!--Main content-->
              <div class="col-md-10">
                <div data-component="phone-catalog"></div>
                <div data-component="phone-viewer"></div>
              </div>
            </div>`;
    }
}
