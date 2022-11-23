import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReturnModal({handleReturnClose,showReturnModal,}) {

  return (
    <>
      <Modal show={showReturnModal} onHide={handleReturnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mark as returned?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to mark this book as returned?</Modal.Body>
        <Modal.Footer>
          <Button variant="" className='border px-5' onClick={handleReturnClose}>
            No
          </Button>
                  <Button variant="" className='return-btn text-white px-5' onClick={() => {
                      handleReturnClose();
                      
                  }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReturnModal;