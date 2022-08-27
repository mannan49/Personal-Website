var SKILLS_CARDS = [
    {id:1, img:"../assets/html_logo.png", skill_heading: "HTML", text: "HTML is the structure of any website. HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn"},
    {id:2, img:"../assets/css_logo.png", skill_heading: "CSS", text: "CSS is used to style the website. CSS describes how HTML elements should be displayed. CSS is easy to learn but difficult to manage."},
    {id:3, img:"../assets/javascript_logo.png", skill_heading: "JavaScript", text:"JavaScript make web pages alive. CSS describes how HTML elements should be displayed. JavaScript is the programming language of the Web."},
]


let cards_array = document.querySelector(".parent-card")
const cards_data = SKILLS_CARDS.map((value,index)=>{
    return `
    <div class="offset-2 offset-md-2 offset-lg-0 offset-xl-0 offset-xxl-0 col-8 col-md-8 col-lg-3 col-xl-3 col-xxl-3 card mb-3" >
            <img src="${value.img}" class="card-img-top" style="height: 100%; object-fit:contain"  alt="...">
            <div class="card-body" style="color: black">
              <h5 class="card-title">${value.skill_heading}</h5>
              <p class="card-text">${value.text}</p>
              <a href="https://codepen.io/manan-nasir" target="_blank" class="btn" style="background-color: rgb(214, 33, 58); color: rgb(232, 231, 232)">${value.skill_heading} Projects</a>
            </div>
          </div>
    `
}).join("")
cards_array.innerHTML = cards_data
