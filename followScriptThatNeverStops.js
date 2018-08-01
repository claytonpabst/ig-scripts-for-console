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

timerTilScroll = 10;
additionalTime = 1;
profilesToView = [];
timesToScroll = 35;
targetFollowersCount = 0;
followLooperCounter = 0;
scrollCounter = 0;
currentPerson = null;
newPeopleFollowed = null;
secondsBetweenFollows = 60;
stopScript = false;
myself = "ariandclay";

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
  return document.getElementsByClassName('_t98z6')[1].click();                       
}

function scrollDown(){
  var looper = setInterval(function(){ 
    scrollCounter++;
    var list = document.getElementsByClassName('_gs38e')[0]

      setTimeout(function(){list.scrollTop = list.scrollHeight}, this.randomTimeToScroll()) 

    if (scrollCounter >= timesToScroll){clearInterval(looper);}
  }, timerTilScroll * 1000);

  setTimeout(function(){ 
    for(let i=0; i<document.getElementsByClassName('_pg23k _9irns _gvoze').length; i++){
      profilesToView.push(document.getElementsByClassName('_pg23k _9irns _gvoze')[i].href)
    }
    console.log(profilesToView);
  }, ((timerTilScroll * timesToScroll)+ additionalTime)*1000);
}

function startFollowing(){
  if(!window.localStorage.peopleFollowed){
    window.localStorage.setItem("peopleFollowed", "[]")
  }
  setTimeout(function(){
    var followLooper = setInterval(function(){
      for(let i=followLooperCounter; i<profilesToView.length; i++){
        if(i >= profilesToView.length-1){
          clearInterval(followLooper)
          console.log("SCRIPT COMPLETE")
        }  
        if(document.getElementsByClassName("_2g7d5")[i].innerHTML !== myself){
          if ((document.getElementsByClassName("_mtnzs")[i].children[0].children[0].innerHTML === "Follow"
              && !followedByScriptBefore(document.getElementsByClassName("_2g7d5")[i].innerHTML))) {
            followLooperCounter = i;
            break;
          }
        }
      }

      setTimeout(function(){
        currentPerson = {
          userName:document.getElementsByClassName("_2g7d5")[followLooperCounter].innerHTML,
          dateOfFollow:new Date
        };
        newPeopleFollowed = JSON.parse(window.localStorage.peopleFollowed);
        newPeopleFollowed.push(currentPerson);
        window.localStorage.setItem("peopleFollowed",JSON.stringify(newPeopleFollowed));
        document.getElementsByClassName('_mtnzs')[followLooperCounter].children[0].children[0].click();
        console.log("Followed " + (followLooperCounter + 1) + " of " + profilesToView.length)
        followLooperCounter ++;
        if(followLooperCounter >= profilesToView.length || stopScript === true){
          clearInterval(followLooper)
          console.log("SCRIPT COMPLETE")
        }
      },this.randomTime());

    }, secondsBetweenFollows * 1000);
  }, ((timerTilScroll * timesToScroll)+ additionalTime + additionalTime)*1000);
}

function followedByScriptBefore(userName){
  let peopleFollowed = JSON.parse(window.localStorage.peopleFollowed)
  for(let i=0; i<peopleFollowed.length; i++){
    if (userName === peopleFollowed[i].userName) {
      return true;
    }
  }
  return false;
}

function continueScrolling(){
  if(document.getElementsByClassName('_gs38e')[0]){
    let list = document.getElementsByClassName('_gs38e')[0];
  }else{
    let list = document.getElementsByClassName('_p4iax')[0]
  }

  let continueScrollingDownLooper = setInterval(function(){ 
    continueScrollingDownLooperCounter++;
    var list = document.getElementsByClassName('_gs38e')[0]

      setTimeout(function(){list.scrollTop = list.scrollHeight}, this.randomTimeToScroll()) 

    if (scrollCounter >= timesToScroll){clearInterval(looper);}
  }, timerTilScroll * 1000);
}

clickFollowers();
scrollDown();
startFollowing();
// continueScrolling();