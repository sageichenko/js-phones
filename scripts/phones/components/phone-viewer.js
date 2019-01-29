import Component from "../../component.js";

export default class PhoneViewer extends Component {
    constructor({element, prevPage, shopCart}) {
        super({element});
        this._prevPage = prevPage;
        this._shopCart = shopCart;
        this._initEvents();
    }

    show(phone) {
        this._currentPhone = phone;
        this._render();
        super.show();
    }

    _initEvents () {
        this._element.addEventListener('click', (ev) => {
            let target = ev.target;
            if (target.classList.contains('btn-back')) {
                this.hide();
                this._prevPage.show();
                return;
            }
            if (target.classList.contains('btn-add-to-cart')) {
                this._shopCart.addProduct({
                    id: this._currentPhone.id,
                    name: this._currentPhone.name
                });
                return;
            }
            if (target.classList.contains('preview')) {
                ev.preventDefault();
                this._element.querySelector('.main-img').src = target.closest('.img-link');
            }
        })
    }

    _render() {
        this._element.innerHTML = `
      <img class="phone main-img" src="${this._currentPhone.images[0]}">
      <button class="btn-back">Back</button>
      <button class="btn-add-to-cart">Add to basket</button>
  
      <h1>${this._currentPhone.name}</h1>
  
      <p>${this._currentPhone.description}</p>
  
      <ul class="phone-thumbs">
      ${this._currentPhone.images.reduce( (acc, item) => {
          acc+=`<li>
            <a class="img-link" href="${item}">
                <img class="preview" src="${item}">
            </a>
        </li>`;
          return acc;
        }, ``)}
      </ul>

<div>
  <div>
    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          <dd>${this._currentPhone.availability}</dd>
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${this._currentPhone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${this._currentPhone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${this._currentPhone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${this._currentPhone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${this._currentPhone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd>${this._currentPhone.connectivity.cell}</dd>
          <dt>WiFi</dt>
          <dd>${this._currentPhone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${this._currentPhone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          <dd>${this._currentPhone.connectivity.infrared ? "✓" : "✘" }</dd>
          <dt>GPS</dt>
          <dd>${this._currentPhone.connectivity.gps ? "✓" : "✘" }</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${this._currentPhone.android.os}</dd>
          <dt>UI</dt>
          <dd>${this._currentPhone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd>${this._currentPhone.sizeAndWeight.dimensions[0]}</dd>
          <dd>${this._currentPhone.sizeAndWeight.dimensions[1]}</dd>
          <dd>${this._currentPhone.sizeAndWeight.dimensions[2]}</dd>
          <dt>Weight</dt>
          <dd>${this._currentPhone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>${this._currentPhone.display.screenSize}</dd>
          <dt>Screen resolution</dt>
          <dd>${this._currentPhone.display.screenResolution}</dd>
          <dt>Touch screen</dt>
          <dd>${this._currentPhone.display.touchScreen ? "✓" : "✘" }</dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${this._currentPhone.hardware.cpu}</dd>
          <dt>USB</dt>
          <dd>${this._currentPhone.hardware.usb}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${this._currentPhone.hardware.audioJack}</dd>
          <dt>FM Radio</dt>
          <dd>${this._currentPhone.hardware.fmRadio ? "✓" : "✘" }</dd>
          <dt>Accelerometer</dt>
          <dd>${this._currentPhone.hardware.accelerometer ? "✓" : "✘" }</dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${this._currentPhone.camera.primary}</dd>
          <dt>Features</dt>
          <dd>${this._currentPhone.camera.features.join(' ')}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>${this._currentPhone.additionalFeatures}</dd>
      </li>
    </ul>
  </div>
</div>`;
    }
}
