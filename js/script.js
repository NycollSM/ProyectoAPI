const mainContent = document.getElementById('main-container');
const content = document.getElementById('container');
const searching = document.querySelector('button');
const txt = document.getElementById('txt');


function contentApi(){
        let a = document.createElement('p');
        a.innerHTML += txt.value;
        content.appendChild(a);
        console.log(txt.innerHTML);
        txt.value = '';
}
searching.addEventListener('click', contentApi);



//function obtenerDatos (){
    //let url = 'https://got-quotes.herokuapp.com/quotes';
  //  const api = new XMLHttpRequest();
  //  api.open('GET', url, true);
  //  api.send();
//}