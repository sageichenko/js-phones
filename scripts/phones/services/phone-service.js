import phones from '../../../phones/phones.js';

const PhoneService = {
    getPhones() {
        return phones;
    },

    getPhone(id, callback) {
        // let phone = {};
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', `file://../../../phones/${id}.js`, false);
        // xhr.send();
        // if (xhr.status !== 200) {
        //     alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        // } else {
        //     console.log( xhr.responseText ); // responseText -- текст ответа.
        // }
        fetch(`file://../../../phones/${id}.json`)
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(res) {
                callback(res);
            })
            .catch( alert );
    }
};

export default PhoneService;
