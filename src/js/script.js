const content = document.getElementById('container');
let imagesResponse;
let t;
const request = new XMLHttpRequest();

function imagesAPI(event) {
  const response = event.target.response;
  for (let item of response.results){
    imagesResponse = document.createElement('img');
    imagesResponse.setAttribute('id', 'imageid');
    imagesResponse.setAttribute('src', item.image);
    imagesResponse.addEventListener('click', Information);
  //nombre de personaje
    t = document.createElement("p");
    t.innerHTML = item.name;
  // agrego div para cada personaje
    const eachCharacter = document.createElement("div");
    eachCharacter.setAttribute('id', 'characters');
  // agrego elementos al dom
    content.appendChild(eachCharacter);
    eachCharacter.appendChild(imagesResponse);
    eachCharacter.appendChild(t);
  } 
}
// respuesta tipo json
request.responseType = 'json';
request.open('GET', 'https://rickandmortyapi.com/api/character/');
request.send();
request.addEventListener('load', imagesAPI);
