import { html, define, render } from 'https://unpkg.com/hybrids@^6';

define({
  tag: "bottom-navbar",
  render: render(function(host){
    return html`
      <div id="bottomNav" class="w3-container w3-rede">
      <div class="w3-cell">
        <button onclick="loadPage('home', this)" class="w3-button scale-in-center"><div><i class="fa fa-home" style="font-size: 30px;"></i></div><div>Home</div></button>
      </div>
      <div class="w3-cell">
        <button onclick="loadPage('members', this)" class="w3-button scale-in-center"><div><i class="fa fa-drivers-license-o" style="font-size: 30px;"></i></div><div>Members</div></button>
      </div>
      <div class="w3-cell">
        <button onclick="loadPage('projects', this)" class="w3-button scale-in-center"><div><i class="fa fa-gamepad" style="font-size: 30px;"></i></div><div>Projects</div></button>
      </div>
      <div class="w3-cell">
        <button onclick="loadPage('more', this)" class="w3-button scale-in-center"><div><i class="fa fa-cog" style="font-size: 30px;"></i></div><div>More</div></button>
      </div>
    </div>
`
  }, {shadowRoot: false})
});