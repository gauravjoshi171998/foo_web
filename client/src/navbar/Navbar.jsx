// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
// import logo from "../assets/reactlogo.png";

// function Header({setToken}) {

//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//      // ✅ Update App state
//     setToken(null);
//     navigate("/login", { replace: true });
//   };

//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container fluid className="px-5">
//         <Link to={"/home"}>
//         <Image src={logo} rounded style={{ width: "100px", height: "auto" }} />
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           {/* <Nav className="me-auto"></Nav> */}
//           <Nav className="me-auto px-4">
//             <Nav.Link href="/userlist">User List</Nav.Link>
//           </Nav>

//           <Nav>
//             <Nav.Link>
//               <Button
//                 onClick={handleLogout}
//                 variant="danger"
//                 className="text-white w-100 rounded-0"
//               >
//                 Logout
//               </Button>
//             </Nav.Link>

//             {/* <Nav.Link>
//               <Button
//                 // onClick={() => setShow(true)}
//                 variant="info"
//                 className="btn btn-info text-white w-100 rounded-0"
//               >
//                 Add User Detail
//               </Button>
//             </Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/reactlogo.png";

function Header({ setToken }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // ✅ Update App state
    setToken(null);
    navigate("/login", { replace: true });
  };
  return (
    <Navbar expand="lg" bg="white"  className="shadow-sm py-3">
      <Container fluid className="px-5">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          {/* <Image
            src={logo}
            alt="logo"
            style={{ width: "80px", height: "auto" }}
          /> */}
           <h1 className="fw-bold logo-text text-black ">logo</h1>
        </Link>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/" className="mx-3 fw-medium text-dark">
              Home
            </Nav.Link>
             <Nav.Link as={Link} to="/userlist" className="mx-3 fw-medium text-dark">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="mx-3 fw-medium text-dark">
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              className="mx-3 fw-medium text-dark"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              className="mx-3 fw-medium text-dark"
            >
              Contact Us
            </Nav.Link>

            {/* Order Now Button */}
            <Button
              as={Link}
              to="/order"
              className="ms-4 px-4 py-2 rounded-pill fw-semibold"
              style={{ backgroundColor: "#f97316", border: "none" }}
            >
              Order Now
            </Button>
            <Button
              onClick={handleLogout}
              to="/order"
              className="ms-4 px-4 py-2 rounded-pill fw-semibold"
              style={{ backgroundColor: "#f97316", border: "none" }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
