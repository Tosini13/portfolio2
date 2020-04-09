
class SkillLevelReact extends React.Component {
    constructor(props) {
        super(props);
        this.nums = [1, 2, 3, 4, 5]
    }
    render() {
        this.skillLevel = this.nums.map((num) => {
            let starClass = "icon-ok-circled2";
            if (num <= this.props.level) {
                starClass += " active";
            }
            return (
                <i className={starClass}></i>
            );
        });

        return (
            <td>
                {this.skillLevel}
            </td>
        );
    }
}

class SkillsReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.skills = this.props.skills.map((skill) =>
            <tr>
                <td>{skill.title}</td>
                <SkillLevelReact level={skill.level} />
            </tr>
        );
        return (
            <tbody>
                {this.skills}
            </tbody>
        );
    }
}

// ========================================

function initSkillsReact(skills) {
    ReactDOM.render(
        <SkillsReact skills={skills} />,
        document.querySelector('#skills table')
    );
}