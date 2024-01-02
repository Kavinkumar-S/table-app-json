import React, { useState } from "react";
import Tablecard from "./Table";
import Adduser from "./Adduser";

import Modal from "react-modal";
export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="container-fluid my-2 py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4 text-right">
              <button type="submit" class="btn btn-primary" onClick={openModal}>
                Adduser
              </button>
            </div>
          </div>

          <div className="my-2">
            <h2>Adduser</h2>

            <Modal
              isOpen={modalIsOpen}
              //   onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div>
                <Adduser />
              </div>
            </Modal>
          </div>

          <Tablecard />
        </div>
      </div>
    </>
  );
}
