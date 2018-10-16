/*** index.js ***/
// import { privateKeyMarvel, publicKeyMarvel } from 'api-keys.js';

function getMarvelComics() {
    const time = new Date().getTime();
    const hash = CryptoJS.MD5(time + privateKeyMarvel + publicKeyMarvel).toString();
    const url = 'https://gateway.marvel.com:443/v1/public/comics';
    // const finalUrl = ` ${url}/?ts=${time}&apikey=${publicKeyMarvel}&hash=${hash}`;

    // fetch(finalUrl, {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.
    //     mode: "no-cors", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, same-origin, *omit
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         // "Content-Type": "application/x-www-form-urlencoded",
    //     }
    //     ts: time,
    //     apikey: publicKeyMarvel,
    //     hash: hash
 
    // }).then( (response) => {
    //     console.log(response);
    //     return response.json();
    
    // }).then( (jsonData) => {
    //     console.log('Request successful', jsonData);
    //     //drawResult(jsonData.data.results);
    // }).catch( (err) => {
    //     console.log(err);
    // });

    $.getJSON(url, {
        ts: time,
        apikey: publicKeyMarvel,
        hash: hash
    }).done( data => {
        drawResult(data.data.results);
    }).fail( err => {
        console.log(err);
    });
};

function drawResult(results) {
    for (var i = 0; i< results.length; i++) {
       var parrafo = document.createElement('p');
       var contenido = document.createTextNode(results[i].title);
       parrafo.appendChild(contenido);
 
       document.body.appendChild(parrafo);
    }
}

getMarvelComics();

