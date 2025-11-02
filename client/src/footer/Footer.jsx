import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-5 text-light">
      <Container>
        <Row className="gy-4">
          {/* Logo and Description */}
          <Col md={3}>
            <h3 className="fw-bold mb-3 logo-text">logo</h3>
            <p className="text-white-50 mb-4">
              Fresh artisanal meals crafted with locally-sourced ingredients and
              culinary passion.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Dine In</a></li>
              <li><a href="#" className="footer-link">Takeaway</a></li>
              <li><a href="#" className="footer-link">Delivery</a></li>
              <li><a href="#" className="footer-link">Catering</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2 text-orange"></i>
                123 Culinary Street, New York, NY 10001
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2 text-orange"></i>
                +1 (555) 123-4567
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2 text-orange"></i>
                info@deliciousbites.com
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center text-white-50">
          © 2024 <span className="text-orange">Delicious Bites</span>. All rights reserved. | Website Builder
        </div>
      </Container>

      {/* Floating Chat Button */}
      <div className="chat-btn d-flex align-items-center gap-2">
        <i className="bi bi-headset text-orange fs-5"></i>
        <span>Talk with Us</span>
      </div>
    </footer>
  );
};

export default Footer;
