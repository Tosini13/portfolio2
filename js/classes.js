class Skill {

    setLevel(level) {
        if (level > 6) {
            this.level = 6;
        } else if (level <= 1) {
            this.level = 1;
        } else {
            this.level = level;
        }
    }

    constructor(title, level) {
        this.title = title;
        this.setLevel(level);
        // this.level = level;
    }

}

class Project {

    setDescription(desc) {
        this.desc = desc;
    }

    setGitHub(gitHub) {
        this.gitHub = gitHub;
    }

    constructor(...datas) { //name, photo, url, desc, git
        this.name = datas[0];
        this.url = datas[1];
        this.photo = datas[2];
        this.desc = datas[3];
        this.gitHub = datas[4];
    }

}

class Design {
    constructor() {
        this.backgroundImg = [];
    }

    setBackgroundImgSet(...set) {
        this.backgroundImg = set;
    }

    initBackgroundAnimation() {
        for (let i = 0; i < 10; i++) {
            for (let logo of this.backgroundImg) {
                let img = document.createElement("img");
                let url = "images/technologies/";
                img.src = url + logo;
                img.setAttribute("alt", logo);
                img.classList.add("backgroundIcon");
                img.addEventListener("click", () => {
                    console.log(logo);
                })
                document.body.appendChild(img);
            }
        }
    }
}

class Me {
    constructor() {
        this.skills = [];
        this.otherSkills = [];
        this.projects = [];
    }

    showAllProjectsPopup() {
        let popup = document.getElementById("myPopup");
        document.getElementById("showAllProjects").addEventListener("click", () => {
            popup.classList.add("openedPopup");
            popup.classList.add("allProjects");
            popup.querySelector(".popupTitle").innerHTML = "My all projects";
            projectInitReact(this.projects);
        });
    }

    update() {
        this.showAllProjectsPopup();
    }

    initSkills() {
        initSkillsReact(this.skills);
    }

    initOtherSkills() {
        initOtherSkillsReact(this.otherSkills);
    }

    initProjects() {
        this.initProjectSlider();
    }

    initProjectSlider() {
        for (let project of this.projects) {
            console.log(project);
            let agit = "";
            let aurl = "";
            if (project.gitHub !== undefined) {
                agit = '<a href=' + project.gitHub + ' target="_blank"><i class="icon-github-circled-alt2"></i></a>';
            }
            if (project.url !== undefined) {
                aurl = '<a href=' + project.url + ' target="_blank"><i class="icon-globe"></i></a>';
            }
            $('#projectsSlick').slick('slickAdd',
                '<div class="projectSlide"><div>' +
                '<h3>' + project.name + '</h3>' +
                '<div class="projectContent">' +
                '<img src="images/websites/' + project.photo + '" alt= ' + project.name + '>' +
                '<div>' +
                '<div>' +
                aurl +
                agit +
                '</div>' +
                '<p>' + project.desc + '</p>' +
                '</div>' +
                '</div>' +
                '</div></div>');
        }
    }
}

var me = new Me();