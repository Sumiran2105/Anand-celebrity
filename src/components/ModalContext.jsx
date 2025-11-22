import React, { createContext, useContext, useState } from "react";
import BookingModal from "./BookingModal";

const ModalContext = createContext();

export const useMultiFormModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpen(false);
    setModalContent(null);
    document.body.style.overflow = '';
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookingModal open={open} onClose={closeModal}>
        {modalContent}
      </BookingModal>
    </ModalContext.Provider>
  );
};
