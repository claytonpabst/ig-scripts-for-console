let timerTilScroll = 5;
let additionalTime = 1;
let profilesToView = [];
let timesToScroll = 15;
let targetFollowersCount = 0;
let followLooperCounter = 0;
let scrollCounter = 0;
let currentPerson = null;
let newPeopleFollowed = null;
let secondsBetweenFollows = 60;
let stopScript = false;
let myself = "cleighty_p";

timerTilScroll = 20;
additionalTime = 1;
profilesToView = [];
timesToScroll = 20;
targetFollowersCount = 0;
followLooperCounter = 0;
scrollCounter = 0;
currentPerson = null;
newPeopleFollowed = null;
secondsBetweenFollows = 60;
stopScript = false;
myself = "cleighty_p";

function mixUpRandomTime(){
  return Math.floor(Math.random()*(1005-995+1)+995);
}
function randomTime(){
  return Math.floor((Math.random() * 10) + 1)*this.mixUpRandomTime(); 
}
function mixUpRandomTimeToScroll(){
  return Math.floor(Math.random()*(105-95+1)+95);
}
function randomTimeToScroll(){
  return Math.floor((Math.random() * 7) + 2)*this.mixUpRandomTimeToScroll(); 
}
function clickFollowers(){   
  return document.getElementsByClassName('_t98z6')[2].click();                       
}

function scrollDown(){
  var looper = setInterval(function(){ 
    scrollCounter++;
    var list = document.getElementsByClassName('_gs38e')[0]

      setTimeout(function(){list.scrollTop = list.scrollHeight}, this.randomTimeToScroll()) 

    if (scrollCounter >= timesToScroll){clearInterval(looper);}
    console.log(scrollCounter)
  }, timerTilScroll * 1000);
}

scrollDown();