var data;
var type;
var id_num;
var url;
var step;
var holder = [];
var request;
 
function findData() {
  url = 'https://swapi.co/api/' + type + '/' + id_num;
  step = 1;
  loadData(url);
}
 
function loadData(url) {
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = loadComplete;
  request.send();
}
 
function loadComplete(evt) {
  data = JSON.parse(request.responseText);
  holder.push(data);
  if(step == 1){
    loadData(data.species);
  }
  if(step == 2){
    loadData(data.homeworld);
  }
  if(step == 3){
    console.log(holder);
  }
  step++;
}

function triviaHandler(){
  var text = this.responceText;
  console.log(JSON.parse(text));
}

type = 'people';
id_num = Math.floor(Math.random()*89);
findData();