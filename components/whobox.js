import { html, define, render } from 'https://unpkg.com/hybrids@^6';

define({
  tag: "who-box",
  render: render(function(host){
    return html`
    
    
    <div class="info-box-xl w3-round w3-container w3-teal slide-in-left">
      <h2 class="w3-margin-top">Who are we?</h2>
      <h6>A small group of students interested in game development. Join our relaxed little club to learn new stuff, meet new people, and experience the joy of creating a video game with others!</h6>
      <a href="/#about-us" style="background-color: #0AA0D6 !important;"class="w3-button w3-round w3-margin-bottom">A bit more about us here</a>
    </div>
    
    
    `
  }, {shadowRoot: false})
});