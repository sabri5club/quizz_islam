import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import QuizzCarte from "./QuizzCarte";

export default function QuizzModal(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Modal
        className="col-12 col-md-12 d-flex justify-content-center  mef-modal-card "
        show={open}
      >
        <Modal.Header className="mef-modal-header d-flex justify-content-center  ">
          Bonne réponse !
        </Modal.Header>
        <div>
          <Modal.Body className="mef-modal-body">
            <QuizzCarte />
          </Modal.Body>
        </div>
        <Modal.Footer className=" d-flex justify-content-center">
          <Button onClick={() => setOpen(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
