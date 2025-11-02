import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./feature.css";

const dishes = [
  {
    id: 1,
    title: "Traditional Indian Thali",
    description:
      "A wholesome Indian platter featuring aromatic basmati rice, crispy papad, spicy curries, tangy pickles, and flavorful vegetable sides — a perfect balance of taste, texture, and tradition in every bite.",
    price: "$28.99",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/South_Indian_non-veg_Meals.jpg",
  },
  {
    id: 2,
    title: "South Indian Thali",
    description:
      "A vibrant and wholesome Indian meal served on a single platter — featuring steamed rice, crispy papad, spicy lentil curry (dal), vegetable sabzi, tangy pickles, chutneys, and a mix of flavorful sides. Each dish complements the other, offering a perfect balance of spice, texture, and authentic Indian taste.",
    price: "$24.99",
    image:
      "https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg",
  },
  {
    id: 3,
    title: "Royal Indian Thali",
    description:
      "A grand Indian platter featuring aromatic rice, crispy papad, rich curries, tangy pickles, lentils, and assorted vegetable sides — perfectly balanced with flavors of spice, sweetness, and tradition. Each bite offers a wholesome taste of authentic Indian cuisine.",
    price: "$45.99",
    image:
      "https://img.freepik.com/free-photo/close-up-street-food-neon-light_23-2151571580.jpg?semt=ais_hybrid&w=740&q=80",
  },
  
];

const Feature = () => {
  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        padding: "80px 0",
        cursor: "pointer",
      }}
    >
      <Container>
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold heading-text">
            Featured <span style={{ color: "#f97316" }}>Dishes</span>
          </h2>
          <p className="text-muted fs-5">
            Discover our chef's signature creations, crafted with the finest
            ingredients <br /> and culinary expertise
          </p>
        </div>

        {/* Dishes Grid */}
        <Row className="g-4 justify-content-center">
          {dishes.map((dish) => (
            <Col key={dish.id} md={4}>
              <Card className="border-0 shadow-sm h-100 rounded-4 overflow-hidden position-relative">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={dish.image}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="position-absolute top-0 end-0 bg-orange text-white fw-semibold rounded-pill px-3 py-1 m-3"
                    style={{
                      backgroundColor: "#f97316",
                      fontSize: "0.9rem",
                    }}
                  >
                    {dish.price}
                  </div>
                </div>
                <Card.Body className="text-start p-4 d-flex flex-column">
                  <Card.Title className="fw-semibold fs-5 mb-2">
                    {dish.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-4 flex-grow-1">
                    {dish.description}
                  </Card.Text>

                  {/* Button fixed to bottom */}
                  <Button
                    className="w-100 py-2 fw-semibold rounded-pill mt-auto"
                    style={{
                      backgroundColor: "#f97316",
                      border: "none",
                    }}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
