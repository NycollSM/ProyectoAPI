const content = document.getElementById('container');
const searching = document.getElementById('search');
const txt = document.getElementById('txt');

function contentApi(){
    if (txt !== ''){
    var newTxt = txt.value;
    var paragraph = document.createElement('p'); 
    paragraph.innerHTML += newTxt;
    content.appendChild(parragrah); 
    } 
    else{
        console.log('error');
    }
}
searching.addEventListener('submit', contentApi);



//function obtenerDatos (){
    //let url = 'https://got-quotes.herokuapp.com/quotes';
  //  const api = new XMLHttpRequest();
  //  api.open('GET', url, true);
  //  api.send();
//}