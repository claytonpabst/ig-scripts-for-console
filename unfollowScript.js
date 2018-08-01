let profilesList = [];
let unfollowIndex = 0;
let dateToUnfollow = "2017-12-01";
let stopScript = false;
let clickUnfollow = false;

profilesList = [];
unfollowIndex = 0;
dateToUnfollow = "2018-04-10";
stopScript = false;

function clickFollowing(){   
  return document.getElementsByClassName('_t98z6')[2].click();                       
}

function startUnfollowing(){
  var unfollowLooper = setInterval(function(){
    profilesList = [];
    for(let i=0; i<document.getElementsByClassName('_pg23k _9irns _gvoze').length; i++){
      profilesList.push(document.getElementsByClassName('_pg23k _9irns _gvoze')[i].href)
    }
    console.log(profilesList);

    for(let i=unfollowIndex; i<profilesList.length; i++){
      if((document.getElementsByClassName("_mtnzs")[i].children[0].children[0].innerHTML === "Following"
        && followedByScriptBefore_And_IndexDateEqualsDateToUnfollow(document.getElementsByClassName("_2g7d5")[i].innerHTML))){
          unfollowIndex = i;
          clickUnfollow = true;
          break;
      }
    }
    console.log(unfollowIndex)
    if(clickUnfollow === true){
      document.getElementsByClassName('_mtnzs')[unfollowIndex].children[0].children[0].click();
    }
    if(clickUnfollow === false){
      clearInterval(unfollowLooper)
      console.log("SCRIPT COMPLETE")      
    }
    unfollowIndex++;
    clickUnfollow = false;
    if(unfollowIndex >= profilesList.length-1 || stopScript === true){
      clearInterval(unfollowLooper)
      console.log("SCRIPT COMPLETE")
    }
  }, 60000)
}

function followedByScriptBefore_And_IndexDateEqualsDateToUnfollow(userName){
  newPeopleFollowed = JSON.parse(window.localStorage.peopleFollowed);
  for(let i=0; i<newPeopleFollowed.length; i++){
    if((userName === newPeopleFollowed[i].userName && newPeopleFollowed[i].dateOfFollow.substring(0, 10) === dateToUnfollow)){
      return true;
    }
  }
  return false;
}


clickFollowing();
startUnfollowing();
