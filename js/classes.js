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

    constructor(...datas) { //name, best, photo, url, desc, git
        this.name = datas[0];
        this.best = datas[1]; //true/false
        this.photo = datas[2];
        this.url = datas[3];
        this.desc = datas[4];
        this.gitHub = datas[5];
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
            let agit = "";
            let aurl = "";
            let bestClass = "";
            if (project.gitHub !== undefined) {
                agit = '<a href=' + project.gitHub + ' target="_blank"><i class="icon-github-circled-alt2"></i></a>';
            }
            if (project.url !== undefined) {
                aurl = '<a href=' + project.url + ' target="_blank"><i class="icon-globe"></i></a>';
            }
            if (project.best) {
                bestClass = " bestProject";
            }
            $('#projectsSlick').slick('slickAdd',
                '<div class="projectSlide"><div>' +
                '<h3>' + project.name + '</h3>' +
                '<div class="projectContent">' +
                '<div class="projectImg' + bestClass + '"><img src="images/websites/' + project.photo + '" alt= ' + project.name + '></div>' +
                '<div class="projectDescription">' +
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