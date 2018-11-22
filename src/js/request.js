const characters = document.getElementById('characters');
let images = document.getElementById('imageid');
// second request
const secondrequest = new XMLHttpRequest();

function Information (event) {
  const response2 = event.target.response;
  console.log(response2);  
  for (let i of response2.results){
    let txtdom = document.createElement("p");
    txtdom.innerHTML = i.type;
    let name = document.createElement("p");
    name.innerHTML = i.name;
    characters.appendChild(txtdom);
    characters.appendChild(name);
   }
}

secondrequest.responseType = 'json';
secondrequest.open('GET', 'https://rickandmortyapi.com/api/location/');
secondrequest.send();
secondrequest.addEventListener('load', Information);