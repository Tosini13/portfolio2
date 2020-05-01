class ProjectReact extends React.Component {
    constructor(props) {
        super(props);
        this.moveToSlide = this.moveToSlide.bind(this);
    }

    moveToSlide() {
        $('#projectsSlick').slick('slickGoTo', this.props.slide);
    }

    render() {
        return (
            <li>
                <a className="project" onClick={this.moveToSlide}>{this.props.project.name}</a>
            </li>
        );
    }
}

class ProjectsReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let counter = 0;
        this.listProjects = this.props.projects.map((project) =>
            <ProjectReact project={project} slide={counter++} />
        );
        return (
            <ul>
                {this.listProjects}
            </ul>
        );
    }
}

// ========================================

function projectInitReact(projects) {
    ReactDOM.render(
        <ProjectsReact projects={projects} />,
        document.querySelector("#myPopup .mainPopup")
    );
}