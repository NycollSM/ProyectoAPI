const mainContent = document.getElementById('main-container');
const content = document.getElementById('container');
const searching = document.querySelector('button');
const txt = document.getElementById('txt');

const request = new XMLHttpRequest();

// agrega los elementos al dom
function imagesAPI (event){
  const response = event.target.response;
  console.log(response);

  for (const i of response.results){
    const list = document.getElementById('list');
    const listImage = document.createElement('li');
    listImage.innerHTML = i.image;
    list.appendChild(listImage);
    const images = document.createElement('img');
    images.setAttribute = ('src', i.image);
    listImage.appendChild(images);
    console.log(images);
  }
}
request.addEventListener('load', imagesAPI);
console.log(imagesAPI);

// buscador
function contentApi(){
        let a = document.createElement('p');
        a.innerHTML += txt.value;
        content.appendChild(a);
        console.log(txt.innerHTML);
        txt.value = '';
}
//searching.addEventListener('click', obtenerDatos);

// respuesta tipo json 
request.responseType = 'json';
request.open('GET', 'https://rickandmortyapi.com/api/character');
request.send();