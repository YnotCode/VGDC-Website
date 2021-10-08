import { html, define, render } from 'https://unpkg.com/hybrids@^6';

function revealDescription(){
  console.log("HI");
}


define({
  tag: "member-profile",
  img_link:"https://louisville.edu/enrollmentmanagement/images/person-icon/image",
  name: "",
  grade: "<Insert Grade>",
  projects: "",
  description: "This is the default description",
  handler: revealDescription,
  render: render(function(host, img_link, name, grade, projects, description, handler){
    return html`
    
    <div style="background-color: #247BA0 !important; color: white !important;" class="info-box-xl w3-round w3-container slide-in-right">
      <div class="w3-row">
          <div class="w3-container w3-col l4" >
            <div class="circle w3-margin-top profileContainer">
              <img style="object-fit: cover;" class="profilePic" src="${host.img_link}" width="188" height="auto"/>
            </div>
          </div>
          <div class="w3-container w3-col l8 profileText">
            <h4>${host.name}</h4>
            <h6>Grade: ${host.grade}</h6>
            <h6>Projects I'm In:<i> ${host.projects}</i></h6>
            <button style="background-color: #2D99C8 !important;" class="w3-rede w3-button w3-round w3-margin-bottom w3-margin-top" onclick="showDescription(this)"><h6>More About Me</h6></button>
            <p style='display: none;'>
              ${host.description}
            </p>
          </div>
      </div>
    </div>
    <div class="spacing w3-container w3-margin-top w3-margin-bottom"></div>
    `
  }, {shadowRoot: false})
});