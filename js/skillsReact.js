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
    return /*#__PURE__*/React.createElement("td", {
      className: "skillLevel"
    }, this.skillLevel);
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
    };
  }

  toggleDescription() {
    if (this.state.desc) {
      this.setState({
        desc: 0
      });
    } else {
      this.setState({
        desc: 1
      });
    }
  }

  showDescription() {
    this.setState({
      desc: 1
    });
  }

  hideDescription() {
    this.setState({
      desc: 0
    });
  }

  render() {
    let desc = "";

    if (this.state.desc) {
      desc = "skillDescriptionOpened";
    }

    return /*#__PURE__*/React.createElement("tr", {
      className: desc,
      onMouseOver: this.showDescription,
      onMouseLeave: this.hideDescription,
      onClick: this.showDescription,
      onClick: this.toggleDescription
    }, /*#__PURE__*/React.createElement("td", null, this.props.skill.title), /*#__PURE__*/React.createElement(SkillLevelReact, {
      level: this.props.skill.level
    }), /*#__PURE__*/React.createElement("td", {
      className: "description"
    }, /*#__PURE__*/React.createElement("p", null, this.props.skill.title, " - ", this.props.skill.level)));
  }

}

class SkillsReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.skills = this.props.skills.map(skill => /*#__PURE__*/React.createElement(SkillReact, {
      skill: skill
    }));
    return /*#__PURE__*/React.createElement("tbody", null, this.skills);
  }

} // ========================================


function initSkillsReact(skills) {
  ReactDOM.render( /*#__PURE__*/React.createElement(SkillsReact, {
    skills: skills
  }), document.querySelector('#skills table'));
}