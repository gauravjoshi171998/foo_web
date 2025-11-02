import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RegistrationForm from "../registrationform/RegistrationForm";
import PopModal from "../modal/PopModal";
import Loader from "../loader/Loader";
import axios from "axios";
import Button from "react-bootstrap/Button";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const [load, setLoad] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUserDetail(null);
  };
  //   const handleShow = () => setShow(true);

  const handleGetAllRegistration = () => {
    axios
      .get("http://localhost:3001/getallregistration")
      .then((data) => setUserData(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetAllRegistration();
  }, []);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setSelectedId(id);
  };

  const handleDelete = () => {
    setLoad(true);
    axios
      .delete(`http://localhost:3001/deleteregistration/${selectedId}`)
      .then((res) => {
        console.log(res.data.message);
        setLoad(false);
        setShowModal(false);
        handleGetAllRegistration(); // refresh table
      })
      .catch((err) => console.log("❌ Delete error:", err));
  };

  const handleEditModal = (data) => {
    console.log(data, ">>>>>>>>>>>");
    setShow(true);
    setUserDetail(data);
  };
  return (
    <div>
      <div className=" w-20 rounded-3 p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0">User Details</h3>
          <Button
            onClick={() => setShow(true)}
            variant="info"
            className="btn btn-info text-white rounded-0"
          >
            Add User Detail
          </Button>
        </div>

        {userData && userData.length > 0 ? (
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>S No</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th>{user?.username}</th>
                    <td>{user?.firstname}</td>
                    <td>{user?.lastname}</td>
                    <td>{user?.gender ? user?.gender : "-"}</td>
                    <td>{user?.email}</td>
                    <td>{user?.mobile}</td>
                    <td>{user?.address}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleEditModal(user);
                      }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleOpenModal(user?._id);
                      }}
                    >
                      <i class="bi bi-trash3"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          "No Data Found"
        )}
      </div>

      <RegistrationForm
        handleGetAllRegistration={handleGetAllRegistration}
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        userDetails={userDetail}
      />
      <PopModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onclick={handleDelete}
      />
      {load && <Loader />}
    </div>
  );
};

export default UserList;
