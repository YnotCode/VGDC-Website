import { html, define, render } from 'https://unpkg.com/hybrids@^6';

define({
  tag: "top-header",
  render: render(function(host){
    return html`
    
    
    <div id="topBar" class="w3-container w3-bar w3-black" style="width: 100vw;">
      <h1 id="header" class="tracking-in-expand w3-center w3-margin-top">Huron Video Game Development Club</h1>
    </div>
    
    
    
    `
  }, {shadowRoot: false})
});