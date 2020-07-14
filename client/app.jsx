class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkedin: 'https://www.linkedin.com/in/abrahamesparza/',
      github: 'https://github.com/abrahamesparza',
      gmail: 'abrahamesparza.us@gmail.com'
    };
  }

  render() {
    let {linkedin, github, gmail} = this.state;
    return (
      <div>
        <h1 className="header">A B R A H A M &nbsp; E S P A R Z A</h1>
        <About />
        <Projects />
        <Footer linkedin={linkedin} github={github} gmail={gmail}/>
      </div>
    )
  }
};

const About = (props) => {
  return (
    <div className="about">
      <h3 className="h3-text">About</h3>
      <p>
        Data Analytics / Retains Manager at <a className="bh" href="https://www.bolthouse.com/">Bolthouse Farms</a>.<br/>
        Seeking full time employment as a Software Engineer:<br/>
        <ul>
          <li>
          Frontend
          </li>
          <li>
          Backend
          </li>
          <li>
          Fullstack
          </li>
        </ul>
        Available for full time work remotely.<br/>
        Open to relocate for onsite.<br/>
      </p>
    </div>
  )
};

const Projects = (props) => {
  return (
    <div className="projects">
      <h3 className="h3.text">Projects</h3>
      <p>
      Currently working on displaying projects.
      </p>
    </div>
  )
};

const Footer = (props) => {
  return (
    <div className="footer">
        <p><a className="linkedin-icon" href={props.linkedin}>LinkedIn</a></p>
        <p><a className="github-icon" href={props.github}>Github</a></p>
        <p><a className="gmail-icon" href={props.gmail}>Gmail</a></p>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('app'));