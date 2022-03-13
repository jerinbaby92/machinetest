import { BASE_URL } from "../utils/constants"
export const DEBITCARD = "/profile"
export const SPENDINGLIMIT = "/quick-amount"



const API_ENDPOINT = "/api"
const API_VERSION = "/v1"

export const getURl = (type) => {

    var url = BASE_URL + API_ENDPOINT + API_VERSION

    switch (type) {
        case DEBITCARD:
            return url + DEBITCARD;
        case SPENDINGLIMIT:
            return url + SPENDINGLIMIT;
       
    }

}

export const getQuery = (json) => {

    var extraUrl = Object.keys(json).map(function (k) {
        return (k) + '=' + (json[k])
    }).join('&')

    console.log(extraUrl);
    return '?' + extraUrl;

}