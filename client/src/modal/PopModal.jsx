import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopModal = ({show, handleClose, onclick}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Registration Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this registration data.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onclick}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopModal;