import React from "react";
import {Modal,Button} from "react-bootstrap";

const Activity = ({ show, handleClose, link, title, updateActivity }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <iframe src={link} width="420"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateActivity}>Complete Activity</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Activity;
