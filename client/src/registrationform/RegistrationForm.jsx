import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({
  handleGetAllRegistration,
  handleClose,
  setShow,
  show,
  userDetails,
}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [validated, setValidated] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setLoad(true);
    if (userDetails?._id) {
      axios
        .put(`http://localhost:3001/updateregistration/${userDetails._id}`, {
          username,
          firstname,
          lastname,
          gender,
          email,
          mobile,
          address,
        })
        .then((res) => {
          console.log("✅ Registration update successfully:", res);
          setLoad(false);
          setUsername("");
          setFirstname("");
          setLastname("");
          setGender("");
          setEmail("");
          setMobile("");
          setAddress("");
          setShow(false);
          handleGetAllRegistration();
        })
        .catch((err) => console.log("❌ Error:", err));
    } else {
      axios
        .post("http://localhost:3001/createregistration", {
          username,
          firstname,
          lastname,
          gender,
          email,
          mobile,
          address,
        })
        .then((res) => {
          console.log("✅ Registration successfully:", res);
          setLoad(false);
          setUsername("");
          setFirstname("");
          setLastname("");
          setGender("");
          setEmail("");
          setMobile("");
          setAddress("");
          navigate("/userlist", { replace: true });
          setShow(false);
          handleGetAllRegistration();
        })
        .catch((err) => console.log("❌ Error:", err));
    }
  };

  useEffect(() => {
    if (userDetails) {
      setUsername(userDetails.username || "");
      setFirstname(userDetails.firstname || "");
      setLastname(userDetails.lastname || "");
      setGender(userDetails.gender || "");
      setEmail(userDetails.email || "");
      setMobile(userDetails.mobile || "");
      setAddress(userDetails.address || "");
    } else {
      setUsername("");
      setFirstname("");
      setLastname("");
      setEmail("");
      setMobile("");
      setAddress("");
    }
  }, [userDetails, show]);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {userDetails ? "Update User Registration" : "Add User Registration"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-1">
              <Form.Group as={Col} controlId="validationUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="mb-1">
              <Form.Group as={Col} controlId="validationFirstname">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="mb-1">
              <Form.Group as={Col} controlId="validationLastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="mb-1">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Select>
            </div>

            <div className="mb-1">
              <Form.Group as={Col} controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="mb-1">
              <Form.Group as={Col} controlId="validationMobile">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group as={Col} controlId="validationAddress">
                <Form.Label>Full Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter full address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>
            {username &&
              firstname &&
              lastname &&
              email &&
              mobile &&
              address && (
                <div>
                  <Button
                    type="submit"
                    variant="info"
                    className="btn btn-info text-white w-100 py-2 rounded-3 mt-2"
                  >
                    {userDetails ? "Update Account" : "Create Account"}
                  </Button>
                </div>
              )}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      {load && <Loader />}
    </>
  );
};

export default RegistrationForm;
