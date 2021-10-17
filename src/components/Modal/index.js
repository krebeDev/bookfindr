import React from 'react'
import closeIcon from '../../images/closeIcon.svg'
import styledComponents from './styles'

const { Modal, ModalInner, ModalHeader, ModalBody, Button } = styledComponents

const ConfirmationModal = ({ closeModal, deleteBook }) => {
  return (
    <Modal onClick={closeModal}>
      <ModalInner
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <ModalHeader>
          <p>Delete Book</p>
          <button aria-label='close modal' onClick={closeModal}>
            <img src={closeIcon} alt='close' width={24} height={24} />
          </button>
        </ModalHeader>
        <ModalBody>
          <p>
            This action will delete this book from your Bookshelf. <br />
            Do you want to continue?
          </p>

          <Button onClick={deleteBook}>Yes, Delete</Button>
        </ModalBody>
      </ModalInner>
    </Modal>
  )
}

export default ConfirmationModal
