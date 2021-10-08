import { html, define, render } from 'https://unpkg.com/hybrids@^6';
define({
    tag: "bubble-bar",
    render: render( (host) => html`
      <div id="navbar" class="w3-container w3-white">
      <div class="w3-cell">
        <button onclick="loadPage('home', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">Home</button>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <button onclick="loadPage('about-us', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">About Us</button>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <button onclick="loadPage('updates', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">Updates</button>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <i class="fa fa-gamepad w3-margin-top" style="color: #81B29A; font-size: 50px;"></i>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <button onclick="loadPage('projects', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">Projects</button>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <button onclick="loadPage('members', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">Members</button>
      </div>
      <div class="w3-cell" style="width: 15px;"></div>
      <div class="w3-cell">
        <button onclick="loadPage('contact', this)" class="w3-button w3-blue w3-round-xxlarge w3-margin-bottom scale-in-center">Contact</button>
      </div>
    </div>
    `, {shadowRoot: false})
  });