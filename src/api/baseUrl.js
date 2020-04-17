export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:5000/' : 'https://pacific-cove-59572.herokuapp.com/';
}


function getQueryStringParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }


    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[1]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "))
}