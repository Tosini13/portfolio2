class ProjectReact extends React.Component {
  constructor(props) {
    super(props);
    this.moveToSlide = this.moveToSlide.bind(this);
  }

  moveToSlide() {
    $('#projectsSlick').slick('slickGoTo', this.props.slide);
  }

  render() {
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      className: "project",
      onClick: this.moveToSlide
    }, this.props.project.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "links"
    }, /*#__PURE__*/React.createElement("a", {
      href: this.props.project.gitHub,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon-github-circled-alt2"
    })), /*#__PURE__*/React.createElement("a", {
      href: this.props.project.url,
      target: "_blank"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon-globe"
    })))));
  }

}

class ProjectsReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let counter = 0;
    this.listProjects = this.props.projects.map(project => /*#__PURE__*/React.createElement(ProjectReact, {
      project: project,
      slide: counter++
    }));
    return /*#__PURE__*/React.createElement("ul", null, this.listProjects);
  }

} // ========================================


function projectInitReact(projects) {
  ReactDOM.render( /*#__PURE__*/React.createElement(ProjectsReact, {
    projects: projects
  }), document.querySelector("#myPopup .mainPopup"));
}