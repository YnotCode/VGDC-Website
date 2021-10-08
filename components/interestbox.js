import { html, define, render } from 'https://unpkg.com/hybrids@^6';

define({
  tag: "info-box",
  render: render(function(host){
    return html`
    
    
    <div class="info-box w3-round w3-container w3-red slide-in-left">
      <h2 class="w3-margin-top">Interested?</h2>
      <h4>Just show up to a meeting!</h4>
      <a href="https://discord.gg/CkkhP4Ns"><button style="background-color: #5863F8;" class="w3-button w3-round w3-margin-bottom">Also join our Discord here</button></a>
      <h6><a href="#contact">Contact us if the link is broken</a></h6>
    </div>
    
    
    `
  }, {shadowRoot: false})
});