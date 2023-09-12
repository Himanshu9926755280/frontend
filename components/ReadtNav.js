import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Form from "../components/form";

const BasicExample = () => {
  const scollToRef = useRef();
  const [hidden, setHidden] = useState(false);
  const onClick = () => setHidden(true);

  useEffect(() => {
    if (scollToRef.current) {
      scollToRef.current.scrollIntoView();
    }
  }, [hidden]);
  return (
    <>
      <Navbar bg="" style={{ backgroundColor: "black" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            Infinity
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="about.js" className="text-light">
                About
              </Nav.Link>
              <Nav.Link href="career.js" className="text-light">
                Career
              </Nav.Link>
              <Nav.Link href="contact.js" className="text-light">
                Contact
              </Nav.Link>
              
              <Nav.Link href="product.js" className="text-light">
               Product
              </Nav.Link>

              <NavDropdown
                title="Services"
                style={{ backgroundColor: "white", borderRadius: "10px", padding: "0px", }}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  App development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Web development
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <button
            className={styles.butt}
            style={{
              color: "white",
              borderColor: "white",
              border: "0",
              lineHeight: "1.8em",
              float: "right",
              textDecoration: "auto",
            }}
            onClick={() => {
              setHidden(true);
              if (scollToRef.current) {
                scollToRef.current.scrollIntoView();
              }
            }}
          >
            Apply Now
          </button>
        </Container>
      </Navbar>

      {hidden ? (
        <div ref={scollToRef}>
          <Form />
        </div>
      ) : null}
    </>
  );
};

export default BasicExample;
