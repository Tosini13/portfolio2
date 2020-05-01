
class OtherSkillLevelReact extends React.Component {
    constructor(props) {
        super(props);
        this.nums = [1, 2, 3, 4, 5, 6]
    }
    render() {
        this.skillLevel = this.nums.map((num) => {
            let starClass = "icon-star-empty";
            if (num <= this.props.level) {
                starClass = "icon-star";
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

class OtherSkillReact extends React.Component {
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
                <OtherSkillLevelReact level={this.props.skill.level} />
                <td className="description">
                    <p>
                        {this.props.skill.title} - {this.props.skill.level}
                    </p>
                </td>
            </tr>
        );
    }

}

class OtherSkillsReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.skills = this.props.skills.map((skill) =>
            <OtherSkillReact skill={skill} />
        );
        return (
            <tbody>
                {this.skills}
            </tbody>
        );
    }
}

// ========================================

function initOtherSkillsReact(skills) {
    console.log(document.querySelectorAll('#skills table')[1]);
    ReactDOM.render(
        <OtherSkillsReact skills={skills} />,
        document.querySelectorAll('#skills table')[1]
    );
}