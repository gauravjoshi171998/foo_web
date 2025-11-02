import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./OurStory.css"; // optional for cleaner styling

const OurStory = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
      <Container>
        <Row className="align-items-center g-5 flex-column-reverse flex-lg-row adjust-device">
          {/* Left Text Section */}
          <Col>
            <h1 className="fw-bold mb-4 heading-text text-center text-md-start">
              Our <span style={{ color: "#f97316" }}>Story</span>
            </h1>

            <p
              className="text-muted mb-4 para-text text-center text-md-start"
              style={{ lineHeight: "1.8" }}
            >
              At <strong>Delicious Bites</strong>, we believe that exceptional
              food brings people together. Our journey began with a simple
              vision: to create memorable dining experiences through fresh,
              locally-sourced ingredients and innovative culinary techniques.
            </p>

            <p
              className="text-muted mb-5 para-text text-center text-md-start"
              style={{ lineHeight: "1.8" }}
            >
              Our passionate team of chefs combines traditional cooking methods
              with modern artistry, ensuring every dish tells a story of flavor,
              quality, and creativity. From intimate dinners to grand
              celebrations, we're here to make every moment delicious.
            </p>

            {/* Stats */}
            <div className="d-flex justify-content-center justify-content-md-start gap-5">
              <div>
                <h2 className="fw-bold" style={{ color: "#f97316" }}>
                  500+
                </h2>
                <p className="text-muted mb-0">Happy Customers</p>
              </div>
              <div>
                <h2 className="fw-bold" style={{ color: "#f97316" }}>
                  50+
                </h2>
                <p className="text-muted mb-0">Signature Dishes</p>
              </div>
            </div>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="position-relative d-flex justify-content-center">
            <div className="position-relative w-100" style={{ maxWidth: "500px" }}>
              <Image
                src="/chef.jpg"
                alt="Chef cooking"
                className="rounded-4 shadow-sm w-100 img-fluid"
              />
              <div
                className="position-absolute translate-middle-y bg-orange text-white rounded-4 shadow px-4 py-3 exp-badge"
                style={{
                  backgroundColor: "#f97316",
                  fontWeight: 600,
                  left: "-20px",
                  bottom: "-40px",
                  minWidth: "120px",
                }}
              >
                <h5 className="mb-0">15+</h5>
                <small>Years Experience</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
