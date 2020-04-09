class SkillLevelReact extends React.Component {
    constructor(props) {
        super(props);
        this.nums = [1, 2, 3, 4, 5];
    }

    render() {
        this.skillLevel = this.nums.map(num => {
            let starClass = "icon-ok-circled2";

            if (num <= this.props.level) {
                starClass += " active";
            }

            return /*#__PURE__*/React.createElement("i", {
                className: starClass
            });
        });
        return /*#__PURE__*/React.createElement("td", null, this.skillLevel);
    }

}

class SkillsReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.skills = this.props.skills.map(skill => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, skill.title), /*#__PURE__*/React.createElement(SkillLevelReact, {
            level: skill.level
        })));
        return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, this.skills));
    }

} // ========================================


function initSkillsReact(skills) {
    ReactDOM.render( /*#__PURE__*/React.createElement(SkillsReact, {
        skills: skills
    }), document.querySelector('#skills table'));
}