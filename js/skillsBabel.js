
class SkillLevelReact extends React.Component {
    constructor(props) {
        super(props);
        this.nums = [1, 2, 3, 4, 5];
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
            <td className="skillLevel">
                {this.skillLevel}
            </td>
        );
    }
}

class SkillReact extends React.Component {
    constructor(props) {
        super(props);
        this.showDescription = this.showDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        this.state = {
            desc: 0
        }
    }

    toggleDescription() {
        if (this.state.desc) {
            this.setState({ desc: 0 });
        } else {
            this.setState({ desc: 1 });
        }
    }

    showDescription() {
        this.setState({ desc: 1 });
    }

    hideDescription() {
        this.setState({ desc: 0 });
    }

    render() {
        let desc = "";
        if (this.state.desc) {
            desc = "skillDescriptionOpened";
        }
        return (
            <tr className={desc} onMouseOver={this.showDescription} onMouseLeave={this.hideDescription} onClick={this.showDescription} onClick={this.toggleDescription}>
                <td>{this.props.skill.title}
                </td>
                <SkillLevelReact level={this.props.skill.level} />
                <td className="description">
                    <p>
                        {this.props.skill.title} - {this.props.skill.level}
                    </p>
                </td>
            </tr>
        );
    }

}

class SkillsReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.skills = this.props.skills.map((skill) =>
            <SkillReact skill={skill} />
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