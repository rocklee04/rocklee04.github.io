$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    

});
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Full-Stack Web Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ? response = await fetch("./skills/skills.json") : type === "tools" ? response = await fetch("./skills/tools.json") :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    console.log(data)

    return data;
}



function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info skills-card">
                <img class="skills-card-img" src="assets/images/${skill.icon}" alt="skill" width="80"/>
                <span class="skills-card-name" >${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showTools(tools) {
    let toolsContainer = document.getElementById("toolsContainer");
    let toolHTML = "";
    tools.forEach(tools => {
        toolHTML += `
        <div class="bar">
              <div class="info skills-card">
                <img class="skills-card-img" src="assets/images/${tools.icon}" alt="skill" width="80"/>
                <span class="skills-card-name" >${tools.name}</span>
              </div>
            </div>`
    });
    toolsContainer.innerHTML = toolHTML;
}


function showProjects(projects) {
    let projectsContainer = document.querySelector("#projects .box-container");
    let projectHTML = "";
    projects.forEach(project => {
        projectHTML += `
        <div class="box tilt project-card">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3 class="project-title">${project.name}</h3>
        </div>
        <div class="desc">
          <p class="project-description">${project.desc}</p>

          <div class="btns">
            <div id="tech2" class="project-tech-stack">
            <h2 style="padding: 0; margin:0; color: #4e084b6c">Tech Stack Used:</h2>
            <img id="tech" src="https://skillicons.dev/icons?i=${project.stacks}" alt=""></div>
            <div> 
                <a href="${project.links.view}" class="btn project-deployed-link" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn project-github-link" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;


    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 900 });

}

fetchData("skills").then(data => {
    showSkills(data);
});

fetchData("tools").then(data => {
    showTools(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

const resume1 = document.getElementById("resume-button-1")
const resume2 = document.getElementById("resume-button-2")

resume1.addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1Yf41S79N3i6_lpGCEFaiVXgrF-FpGRma/view?usp=sharing", "_blank");
})

resume2.addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1Yf41S79N3i6_lpGCEFaiVXgrF-FpGRma/view?usp=sharing", "_blank");
})




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home2 .content h3', { delay: 200 });
srtop.reveal('.home2 .content p', { delay: 200 });
srtop.reveal('.home2 .content .btn', { delay: 200 });

srtop.reveal('.home2 .image', { delay: 400 });
srtop.reveal('.home2 .linkedin', { interval: 600 });
srtop.reveal('.home2 .github', { interval: 800 });



srtop.reveal('.home2 .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about2 .content h3', { delay: 200 });
srtop.reveal('.about2 .content .tag', { delay: 200 });
srtop.reveal('.about2 .content p', { delay: 200 });
srtop.reveal('.about2 .content .box-container', { delay: 200 });
srtop.reveal('.about2 .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills2 .container', { interval: 200 });
srtop.reveal('.skills2 .container .bar', { delay: 400 });


/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 900 });


/* SCROLL CONTACT */
srtop.reveal('.contact2 .container', { delay: 400 });
srtop.reveal('.contact2 .container .form-group', { delay: 400 });