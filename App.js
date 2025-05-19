import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import './App.css';

function App() {
  return (
    <div className="bg-image">
      <Navbar expand="lg" className="navbar" variant="dark">
         <Container fluid>
       
        <Navbar.Brand className="p1-nav">
      <img
        src="icons8-portfolio-100.png"
        alt="portfolio"
        className="icon"
       style={{ marginRight: "10px" }} // optional inline styling
      />
       Madhavi Mihika
      </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
     
       <Nav className="ms-auto d-flex align-items-center gap-3" navbarScroll>
          <Nav.Link href="#intro" className="p-link">My intro</Nav.Link>
         <Nav.Link href="#portfolio" className="p-link">Portfolio</Nav.Link>
          <Nav.Link href="#skills" className="p-link">Skills</Nav.Link>
      </Nav>

     
      <Form className="d-flex ms-3">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    <div className="intro-container">
  <div className="intro-text">
    <h1 className="h1 image" img src="icons8-girl-greeting-64.png" alt="Profile" >Hello There <br /> I'm Madhavi Mihika</h1>
    <h2 className='h2'>Undergraduate Software Engineer</h2>
    <p className="p2">
      Passionate about building user-friendly applications and <br />
      exploring modern web technologies. Currently pursuing <br />
      my studies in software engineering with a strong interest in front-end development,
      UI/UX design, and problem-solving.
    </p>
    <Button variant="primary" className="button">
      <a href='Madhavi Mihika CV.pdf'>Download CV</a>
    </Button>
  </div>
  <div className="intro-image">
    <img className="img" src="girl pic.png" alt="Profile" />
  </div>
</div>


      <div className="sidebar">
        <div className="sidebar-item">
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <img src="icons8-gmail-100.png" alt="Email" className="icon" />
            <p >Gmail</p>
          </a>
        </div>
        <div className="sidebar-item">
          <a href="https://github.com/madhavimihika" target="_blank" rel="noopener noreferrer">
            <img src="icons8-github-150.png" alt="GitHub" className="icon" />
            <p>GitHub</p>
          </a>
        </div>
        <div className="sidebar-item">
          <a href="https://www.linkedin.com/in/madhavi-mihika-03aa7a2a0/" target="_blank" rel="noopener noreferrer">
            <img src="icons8-linkedin-96.png" alt="LinkedIn" className="icon" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
      <center>
    <img src="footer2.png" />
    </center>
    </div>
  );
}

export default App;
