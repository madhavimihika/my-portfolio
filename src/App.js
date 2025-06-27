import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {
  return (

    <div className="bg-image">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Navbar expand="lg" className="navbar ms-3" variant="dark">
        <Container fluid>
          <Navbar.Brand className="p1-nav">
            <img
              src="icons8-portfolio-100.png"
              alt="portfolio"
              className="icon"
              style={{ marginRight: "10px" }}
            />
            Madhavi Mihika
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center gap-3" navbarScroll>
              <Nav.Link href="#intro" className="p-link">My Intro</Nav.Link>
              <Nav.Link href="#skills" className="p-link">Skills</Nav.Link>
              <Nav.Link href="#projects" className="p-link">Projects</Nav.Link>
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

      {/* intro section */}
      <section id="intro" className="intro-container ms-3">
        <div className="intro-text ">
          {/* <img className="img" src="" alt="Profile" /> */}
          <h1 className="h1 ">
            Hello There <br /> I'm Madhavi Mihika
          </h1>
          <h2 className="h2 ">Undergraduate Software Engineer</h2>
          <p className="p2">
            Passionate about building user-friendly applications and <br />
            exploring modern web technologies. Currently pursuing <br />
            my studies in BSc Computing with a strong interest in front-end development,
            UI/UX design, and problem-solving.
          </p>
          <div className="intro-image">
          
        </div>
      
        <div className="cv-button-container">
          <Button className="cv-button">
              <a href="Madhavi Mihika CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
          </Button>
        </div>


        </div>
        </section>
    {/* footer */}
      <center>
  <img src="footer2.png" className="footer-img" alt="Footer" />
      </center>
        

     {/* Skill section */}
   <section id="skills" className="skills-section ms-5 me-3">
      <h2 className="section-title">My Skills</h2>
       <div className="skills-grid">
           <div className="skill-card">HTML</div>
           <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
           <div className="skill-card">React.js</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">C++</div>
            <div className="skill-card">C#</div>
            <div className="skill-card">Git & GitHub</div>

      </div>
    </section>
   
  
  {/* Education section */}
  <center>
<section id="education" className="education-section my-5 py-5">
  <div className="container">
    <h2 className="section-title text-center mb-4 fw-bold">Education</h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {[
        { degree: "BSc Computing (Software Engineer Pathway)", institute: "NIBM", duration: "2025 - 2027" },
        { degree: "Higher National Diploma in Software Engineering", institute: "NIBM", duration: "2024 - 2025" },
        { degree: "Diploma in Software Engineering", institute: "NIBM", duration: "Aug 2022 - Dec 2023" },
        { degree: "National Vocational Qualification in ICT Level-3", institute: "NVQ", duration: "2021" },
        { degree: "G.C.E. Advanced Level", institute: "Kolonnawa Balika Vidyalaya", duration: "2019" },
        { degree: "G.C.E. Ordinary Level", institute: "Kolonnawa Balika Vidyalaya", duration: "2016" }
      ].map((edu, index) => (
        <div className="col" key={index}>
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold">{edu.degree}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{edu.institute}</h6>
              {edu.duration && (
                <p className="card-text text-secondary">{edu.duration}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</center>


{/* project */}
<section id="projects" className="proj-cards background-image">
  <h2 className="section-title"><center>Projects</center></h2>
   <div className="card-wrapper">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Eye image 2.jpg" />
      <Card.Body>
        
        <Card.Title>Cataract Detection System</Card.Title>
        <Card.Text>
            A Python-based project developed under Digital Image Processing (DIP), designed to analyze eye images and detect signs of cataracts using computer vision techniques.
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>Python (Core language)</li>
                <li>OpenCV (Image filtering, segmentation)</li>
                <li>NumPy/Pandas (Data handling)</li>
          </ul>
        </Card.Text>

        <Button variant="primary" className="project-card-button">
          <a href="https://drive.google.com/file/d/1aDG4cs-aQa65E_ccNvTDpjPJKIA-bpUa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </Button>
        <br></br>
        <Button variant="primary" className="project-card-button">
          <a href="" target="_blank" rel="noopener noreferrer">
           Documenets
          </a>
        </Button>
      </Card.Body>
    </Card>
    <Card className='card2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="hr system.png" />
      <Card.Body>
        <Card.Title>HR System for Postal Department (In Progress)</Card.Title>
       <Card.Text>
          Building a C# based system to manage employee records, attendance, leave, and payroll efficiently.
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                
                <li>Features include employee records management, attendance tracking, leave management, and payroll integration</li>
               
                </ul>
          </Card.Text>

        <Button variant="primary" className="project-card-button">
          <a href="https://drive.google.com/drive/my-drive?dmr=1&ec=wgc-drive-hero-goto" target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </Button>
        <br></br>
        <Button variant="primary" className="project-card-button">
          <a href="" target="_blank" rel="noopener noreferrer">
           Documenets
          </a>
        </Button>
      </Card.Body>
    </Card>
    <Card className='card2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="sm ss.png" />
      <Card.Body>
        <Card.Title>Stock Managemenat System</Card.Title>
       <Card.Text>
           A frontend interface for inventory management built using HTML, CSS, and Bootstrap, with key UI functionalities.
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>Product listing and stock tracking UI</li>
                <li>Order tracking interface</li>
                <li>User-friendly forms for adding and updating products</li>
               <li>Navigation with Bootstrap navbar</li>
               
                </ul>
          </Card.Text>

        <Button variant="primary" className="project-card-button">
          <a href="https://drive.google.com/file/d/1MKIt-hMmweOl01rT6V4ozuyiOUQHOmB6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </Button>
        <br></br>
        <Button variant="primary" className="project-card-button">
          <a href="" target="_blank" rel="noopener noreferrer">
           Documenets
          </a>
        </Button>
      </Card.Body>
    </Card>

   <Card className='card2' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="jap.png" />
  <Card.Body>
    <Card.Title>Job Application Portal</Card.Title>
    <Card.Text>
      Job Application Portal UI
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Clean and simple login and signup forms</li>
        <li>Responsive job listings with key details</li>
        <li>User-friendly interface for job browsing</li>
        <li>Focus on intuitive navigation and design</li>
      </ul>
    </Card.Text>
    <Button variant="primary" className="project-card-button">
      <a href="https://drive.google.com/file/d/11T2BUlpGolhDMkS2qBi7L_4m2bbNqX7k/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
        Watch Video
      </a>
    </Button>
    <br></br>
        <Button variant="primary" className="project-card-button">
          <a href="" target="_blank" rel="noopener noreferrer">
           Documenets
          </a>
        </Button>
  </Card.Body>
</Card>

  </div>

</section>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item">
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <img src="icons8-gmail-100.png" alt="Email" className="icon" />
            <p>Gmail</p>
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
     <section id="contact" className="contact-section py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm rounded-4 border-0">
          <div className="card-body p-4">
            <h2 className="text-center mb-3 fw-bold">Contact Me</h2>
            <p className="text-center text-muted mb-4">
              Feel free to reach out directly at <strong>mihikamadhavi123@gmail.com</strong> <br />
              or drop your message below 
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your full name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="yourname@gmail.com"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  className="form-control"
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-lg rounded-pill">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}

export default App;
