import phones from '../../../phones/phones.js';
import phone from '../../../phones/motorola-xoom-with-wi-fi.js';

const PhoneService = {
    getPhones() {
        return phones;
    },

    getPhone(id, callback) {
        // let phone = {};
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', `./phones/${id}.js`, false);
        // xhr.send();
        // if (xhr.status !== 200) {
        //     alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        // } else {
        //     console.log( xhr.responseText ); // responseText -- текст ответа.
        // }

        // fetch(`./phones/${id}.json`)
        //     .then((response) => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then((res)  =>{
        //         callback(res);
        //     })
        //     .catch( alert );

        fetch(`./phones/${id}.json`)
            .then(response => response.json())
            .then(obj => {
                callback(obj);
            })
    }
};

export default PhoneService;
