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

class Me {
    constructor() {
        this.skills = [];
    }

    initSkills() {
        initSkillsReact(this.skills);
    }
}

var me = new Me();
me.skills.push(new Skill("HTML 5", 5));
me.skills.push(new Skill("CSS 3", 5));
me.skills.push(new Skill("SASS", 5));
me.skills.push(new Skill("LESS", 4));
me.skills.push(new Skill("JavaScript", 5));
me.skills.push(new Skill("jQuery", 4));
me.skills.push(new Skill("Bootstrap", 3));
me.skills.push(new Skill("React.js", 3));
me.skills.push(new Skill("PHP", 4));
me.skills.push(new Skill("MySQL", 4));
me.skills.push(new Skill("Java", 3));
me.skills.push(new Skill("C++", 2));


me.initSkills();