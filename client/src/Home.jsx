import Header from "./navbar/Navbar";
import RegistrationForm from "./registrationform/RegistrationForm";
import UserList from "./userlist/UserList";
import { Button, Container } from "react-bootstrap";
import "./home.css";
import Feature from "./feature/Feature";
import OurStory from "./ourstory/OurStory";
import OurServices from "./OurServices/OurServices";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/background-bowl-ramen-noodles-free-space_1123417-2488.jpg?semt=ais_hybrid&w=740&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="hero-overlay"></div>

      <Container className="hero-content text-white position-relative px-3">
        <h1 className="hero-title">
          Delicious <span className="text-orange">Bites</span>
        </h1>

        <p className="hero-text">
          Experience exceptional culinary artistry with fresh, locally-sourced
          ingredients crafted into mouth-watering dishes that celebrate flavors
          from around the world.
        </p>

        <div className="hero-buttons">
          <Button
            variant="warning"
            className="btn-orange px-4 py-3 rounded-pill fw-semibold w-md-auto"
          >
            View Our Menu
          </Button>

          <Button
            variant="outline-light"
            className="btn-outline-custom px-4 py-3 rounded-pill fw-semibold w-md-auto mt-3 mt-md-0"
          >
            Make Reservation
          </Button>
        </div>
      </Container>
    </div>
    <Feature/>
    <OurStory/>
    {/* <OurServices/>
    <Newsletter/>
    <Footer/> */}

    </>
  );
};

export default Home;
