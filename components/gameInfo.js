import { html, define, render } from 'https://unpkg.com/hybrids@^6';

define({
  tag: "game-info",
  title: "Title",
  description: "A game.",
  link:"https://hhs-vgddc.itch.io",
  render: render(function(host, title, description, link){
    console.log(link);
    return html`
      <div class="w3-margin-left info-box-xl w3-round w3-container slide-in-left" style="text-align: left !important; background-color: #B33F62 !important; color: white;">
        <h2 class="w3-margin-top">${host.title}</h2>
        <h4>${host.description}</h4>
        <a href="${host.link}" target="_blank"><button style="background-color: #fa5c5c !important;" class="w3-button w3-black w3-round w3-margin-bottom">Download for FREE on itch.io</button></a>
      </div>
    `
  }, {shadowRoot: false})
});