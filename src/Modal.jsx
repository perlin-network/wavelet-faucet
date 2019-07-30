import React, { useCallback, useState } from "react";
import CloseIcon from "./assets/svg/close-icon.svg";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${props => props.theme.backdropColor};
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: ${props => props.theme.modalTop};
  left: 50%;
  width: 100%;
  max-width: ${props => props.theme.modalMaxWidth};
  color: ${props => props.theme.modalColor};
  transform: translateX(-50%);
  padding: ${props => props.theme.modalPadding || "20px"};
  background-color: ${props => props.theme.modalBackground};
  box-shadow: ${props => props.theme.modalShadow};
  border-radius: ${props => props.theme.borderRadius};
  z-index: ${props => props.theme.modalZIndex};
`;

const ModalHeader = styled.div`
  display: flex;
  background: ${props => props.theme.headerBackground};
  color: ${props => props.theme.headerColor};
  font-family: ${props => props.theme.fontFamily};
  margin: ${props =>
    props.hasHeader ? "-" + props.theme.modalPadding : "0px"};
  padding-left: 20px;
  margin-bottom: 30px;
  justify-content: ${props => (props.hasHeader ? "space-between" : "flex-end")};
  align-items: ${props => (props.hasHeader ? "center" : "")};
`;

const ModalBody = styled.div``;

// const ModalCloseButton = styled.img.attrs({ src: CloseIcon })`
//   height: 20px;
//   width: 20px;
//   ${props => props.theme.headerColor === 'black' ? 'filter: invert(1);' : ''}
//   padding-right: 20px;
//   cursor: pointer;
// `;

const ModalCloseButton = styled(({ onClick, className }) => (
  <div className={className} onClick={onClick}>
    X
  </div>
))`
  font-family: mono;
  font-size: 20pt;
  padding-right: 20px;
  cursor: pointer;
`;

const Modal = ({ onClose, header, open, children, theme }) => {
  const preventEventBubbling = useCallback(e => {
    e.stopPropagation();
  }, []);

  return (
    <React.Fragment>
      {open && (
        <ModalBackdrop className="modal-backdrop" onClick={onClose}>
          <ModalWrapper
            className="modal-wrapper"
            onClick={preventEventBubbling}
          >
            <ModalHeader
              className="modal-header"
              justifyContent="space-between"
              hasHeader={header && true}
            >
              {header}
              <ModalCloseButton
                className="modal-close-button"
                onClick={onClose}
              />
            </ModalHeader>
            <ModalBody className="modal-body">{children}</ModalBody>
          </ModalWrapper>
        </ModalBackdrop>
      )}
    </React.Fragment>
  );
};

export default Modal;
