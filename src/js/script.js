
const content = document.getElementById('container');
// const searching = document.querySelector('button');
const txt = document.getElementById('txt');

const request = new XMLHttpRequest();

// agrega los elementos al dom
function imagesAPI(event) {
  const response = event.target.response;
  console.log(response);

  for (let i of response.results){
    const imagesResponse = document.createElement('img');
    imagesResponse.setAttribute('src', i.image);
  // agrego elementos al dom
    content.appendChild(imagesResponse);
  }
}
request.addEventListener('load', imagesAPI);

// buscador
// function contentApi(){
//        let a = document.createElement('p');
//       a.innerHTML += txt.value;
//        content.appendChild(a);
//        console.log(txt.innerHTML);
//        txt.value = '';
// }
// searching.addEventListener('click', obtenerDatos);

// respuesta tipo json
request.responseType = 'json';
request.open('GET', 'https://rickandmortyapi.com/api/character/');
request.send();
