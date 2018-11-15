const content = document.getElementById('container');
let imagesResponse;
let t;
// const searching = document.querySelector('button')
const request = new XMLHttpRequest();
const secondrequest = new XMLHttpRequest();

function Information (event){
  const response = event.target.response;
  console.log(response);
  for (let info of response.results){
    const infotxt = info.response.results;
    const txtdom = document.createElement('p');
    txtdom.innerText = infotxt;
  }
}

function imagesAPI(event) {
  const response = event.target.response;
  for (let item of response.results){
    imagesResponse = document.createElement('img');
    imagesResponse.setAttribute('src', item.image);
    imagesResponse.addEventListener('click', Information);
    //nombre de personaje
    t = document.createElement('p');
    t.innerHTML = item.name;
  // agrego elementos al dom
    content.appendChild(imagesResponse);
    content.appendChild(t);
  }
}




// respuesta tipo json
// primer request
request.responseType = 'json';
request.open('GET', 'https://rickandmortyapi.com/api/character/');
request.send();
request.addEventListener('load', imagesAPI);
//second request
secondrequest.responseType = 'json';
secondrequest.open('GET', 'https://rickandmortyapi.com/api/location/');
secondrequest.send();
secondrequest.addEventListener('load', Information);