const content = document.getElementById('container');

function obtenerDatos (){
    let url = 'https://got-quotes.herokuapp.com/quotes';
    const api = new XMLHttpRequest();
    api.open('GET', url, true);



    api.send();
}