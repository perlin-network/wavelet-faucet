import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { Button } from "./core";
import Faucet from "./Faucet.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const FaucetButton = ({ url }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>
        Wavelet Faucet
        <Modal open={open} onClose={handleClose}>
          <Faucet url={url}/>
        </Modal>
      </Button>
    </ThemeProvider>
  );
};

export default FaucetButton;
