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
    min-height: 280px;
    transform: translateX(-50%);
    padding: 25px 20px;
    background-color: ${props => props.theme.modalBackground};
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: ${props => props.theme.borderRadius};
    z-index: ${props => props.theme.modalZIndex};
`;

const ModalHeader = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: flex-end;
`;

const ModalBody = styled.div``;

const ModalCloseButton = styled.img.attrs({ src: CloseIcon })`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;

const Modal = ({
    onClose,
    open,
    children,
    theme
}) => {
    const preventEventBubbling = useCallback((e) => {
        e.stopPropagation();
    }, []);

    return (
        <>
            {open && (
                <ModalBackdrop className="modal-backdrop" onClick={onClose}>
                    <ModalWrapper className="modal-wrapper" onClick={preventEventBubbling}>
                        <ModalHeader className="modal-header" justifyContent="space-between">
                            <ModalCloseButton className="modal-close-button" onClick={onClose}/>
                        </ModalHeader>
                        <ModalBody className="modal-body">{children}</ModalBody>
                    </ModalWrapper>
                </ModalBackdrop>
            )}
        </>
    );
};

export default Modal;
