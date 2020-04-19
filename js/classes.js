class Skill {

    setLevel(level) {
        if (level > 5) {
            this.level = 5;
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

    constructor(...datas) { //name, url, desc, git
        this.name = datas[0];
        this.url = datas[1];
        this.desc = datas[2];
        this.gitHub = datas[3];
    }

}

class Me {
    constructor() {
        this.skills = [];
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

    initProjects() {
        this.initProjectSlider();
    }

    initProjectSlider() {
        for (let project of this.projects) {
            $('#projectsSlick').slick('slickAdd',
                '<div class="projectSlide"><div>' +
                '<h3>' + project.name + '</h3>' +
                '<div><div>' +
                '<a href=' + project.gitHub + ' target="_blank">' +
                '<i class="icon-github-circled-alt2"></i></a>' +
                '<a href=' + project.url + ' target="_blank">' +
                '<i class="icon-globe"></i></a>' +
                '</div>' +
                '<p>' + project.desc + '</p>' +
                '</div>' +
                '</div></div>');
        }
    }
}

var me = new Me();