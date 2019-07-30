import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { Button } from "./core";
import Faucet from "./Faucet.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const FaucetButton = ({ modalHeader, url, theme: defaultTheme }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
      <ThemeProvider theme={defaultTheme || theme}>
      <div>
        <Modal header={modalHeader ? <h2>PERL Faucet</h2>: ''}open={open} onClose={handleClose}>
          <Faucet header={!modalHeader}url={url} />
        </Modal>
        <Button onClick={handleOpen}>Wavelet Faucet</Button>
      </div>
    </ThemeProvider>
  );
};

export default FaucetButton;
