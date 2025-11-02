import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section py-5">
      <Container className="text-center">
        <h2 className="fw-bold text-white mb-3 heading-text">Stay Updated</h2>
        <p className="text-light mb-5 para-text">
          Subscribe to our newsletter and be the first to know about new dishes,
          special offers, and <br/> culinary events
        </p>

        <Form className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <Button type="submit" className="newsletter-btn">
            Subscribe
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Newsletter;
