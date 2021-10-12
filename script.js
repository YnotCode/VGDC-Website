/*make the wobble animation work by removing other animation
from button*/
function wobl(host){
    host.className = host.className.replace("scale-in-center", ""); 
} 

function showDescription(thing){
  var description = thing.parentElement.children[thing.parentElement.children.length - 1];

  if (description.style.display == "none"){
    description.style.display = "block";
    thing.innerHTML = "Less About Me";
  }
  else{
    description.style.display = "none";
    thing.innerHTML = "More About Me";
  }
}

function setTime(something){
  console.log("HIIISKFNJKOFSKF");
        
  var daysNeeded = [null, 2, 1, 0, 6, 5, 4, 3];
  //get current day as integer from 0-6
  dayjs.extend(window.dayjs_plugin_utc);
  var currentDay = dayjs().utc().day();
  console.log(currentDay);
  var daysToAdd = daysNeeded[currentDay];
  console.log(daysToAdd);
  var nextMeeting = dayjs().utc().add(daysToAdd, 'day');
  console.log(nextMeeting.day());
  something.innerHTML = nextMeeting.format('dddd, MMMM D');
        
}


var pages = ["home", "about-us", "updates", "projects", "members", "contact"];

//switch out the content based on page and use wobble animation on button if applicable
function loadPage(pageName, wobble){
  console.log("LOADING");
  console.log(pageName)
  if (wobble){
    wobl(wobble);
  }
  for (page of pages){
    if (page != pageName && !((page == "about-us" || page == "contact") && (pageName == "more"))){
      document.getElementById(page).style.display = "none";
    }
    else{
      console.log("GOT PAGE: " + page);
      document.getElementById(page).style.display = "block";
    }
  }
  window.history.pushState(pageName, pageName, '/#' + pageName);
}

//decide which page to load based on url
function handleUrl(event){

  console.log(document.getElementById("timed"));
  setTime(document.getElementById("timed"));

  var url = window.location.href;
  console.log("URL: " + url);
  if (url.indexOf("more") != -1){
    loadPage("more", false);
  }
  for (page of pages){
    if (url.indexOf(page) != -1){
      console.log("Page: " + page)
      loadPage(page, false);
      return;
    }
  }
  loadPage("home", false);
}

//add listeners to detect page load or page change
window.addEventListener('popstate', handleUrl);

window.onload = handleUrl;