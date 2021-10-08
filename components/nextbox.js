import { html, define, render } from 'https://unpkg.com/hybrids@^6';


function setMeeting(){
      console.log("STARTING");
      /*the number of days till the next meeting for each day 
      (index 1 is Monday, index 6 is Sunday)*/
      var daysNeeded = [null, 2, 1, 0, 6, 5, 4, 3];
      //get current day as integer from 0-6
      dayjs.extend(window.dayjs_plugin_utc);
      var currentDay = dayjs().utc().day();
      console.log(currentDay);
      var daysToAdd = daysNeeded[currentDay];
      console.log(daysToAdd);
      var nextMeeting = dayjs().add(daysToAdd, "day");
      console.log(nextMeeting.day());
      //var thing = 
      //thing.innerHTML = nextMeeting.format("dddd, MMMM D")
}



define({
  tag: "next-box",
  setMeeting: setMeeting,
  render: render(function(host, setMeeting){
    
    return html`
    
    
    <div class="info-box w3-round w3-container w3-blue slide-in-right">
      <h2 class="w3-margin-top">Next Meeting:</h2>
      <h3 id="timed" onclick="runTHing(this)">Wednesday, September 19th</h3>
      <h5>Room 4202, after school - 4:00 p.m.</h5>
    </div>
    
    
    `
  }, {shadowRoot: false})
});