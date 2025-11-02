import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./OurServices.css";

const OurServices = () => {
  return (
    <section className="services-section py-5">
      <Container className="text-center">
        {/* Title */}
        <h1 className="fw-bold mb-3 text-white heading-text ">
          Our <span className="text-orange">Services</span>
        </h1>
        <p className="text-light mb-5 para-text">
          From intimate dining to grand celebrations, we offer comprehensive <br/>
          culinary services to meet all your needs
        </p>

        {/* Services */}
        <Row className="gy-5 justify-content-center">
          <Col lg={3} md={6} sm={12}>
            <div className="service-card">
              <div className="icon-circle">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <h5 className="fw-semibold mt-4 mb-3 text-white">Fine Dining</h5>
              <p className="text-light small">
                Experience our elegant atmosphere with exceptional service and
                gourmet cuisine crafted by expert chefs.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="service-card">
              <div className="icon-circle">
                <i className="bi bi-truck"></i>
              </div>
              <h5 className="fw-semibold mt-4 mb-3 text-white">Food Delivery</h5>
              <p className="text-light small">
                Enjoy our delicious meals from the comfort of your home with
                fast and reliable delivery service.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="service-card">
              <div className="icon-circle">
                <i className="bi bi-people"></i>
              </div>
              <h5 className="fw-semibold mt-4 mb-3 text-white">Event Catering</h5>
              <p className="text-light small">
                Make your special occasions memorable with our professional
                catering services and custom menus.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="service-card">
              <div className="icon-circle">
                <i className="bi bi-calendar-event"></i>
              </div>
              <h5 className="fw-semibold mt-4 mb-3 text-white">Private Events</h5>
              <p className="text-light small">
                Host intimate gatherings or corporate events in our private
                dining spaces with personalized service.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
