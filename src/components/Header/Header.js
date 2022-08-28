import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useHistory, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const history = useHistory();
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              history.goBack();
            }}
            style={{ cursor: "pointer" }}
            className="changeBg"
          >
            <h3> Courses</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link>{localStorage.getItem("name")}</Nav.Link>
              <Nav.Link eventKey={2}>{localStorage.getItem("email")}</Nav.Link>
              <Button variant="btn btn-success" onClick={clearStorage}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BreadCrumb title={title} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default withRouter(Header);
