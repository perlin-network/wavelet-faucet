import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonOutlined, StyledInput, WhiteButton } from "./core";
import DiscordIcon from "./assets/svg/discord-icon.svg";
import DiscordIconBlack from "./assets/svg/discord-icon-black.svg";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import LoadingSpinner, { Spinner } from "./LoadingSpinner.jsx";

const Wrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
  font-weight: normal;
  color: white;
  background: ${props => props.theme.modalBackground};
  border-radius: 5px;
  padding: 10px;
  h1 {
    margin-top: 0;
  }
  ${WhiteButton} {
    width: auto;
  }
  ${StyledInput} {
    margin: 20px;
  }
  ${Spinner} {
    margin-top: 0;
  }
`;

const FormWrapper = styled.form`
    width: calc(100% - 40px);
    display: flex;
     ${StyledInput} {
        border-radius: ${props => props.theme.borderRadius}
0px
0px
        ${props => props.theme.borderRadius};;
        flex-grow: 1;
        height: 40px;
        padding: 0px;
        padding-left: 10px;
        margin: 0;
        width: auto;
    }
    ${Button} {
        height: 42px;
        font-size: 16px;
        font-weight: 600;
        background-color: #A0a0a0;
        color: #151b35;
        border-radius: ${props => props.theme.borderRadius};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
        &:active {
            background-color: #d4d5da;
        }
    }
`;

const CenterContent = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
//  height: 70px;
  margin-bottom: 15px;
`;

const FaucetText = styled.div`
font-size: 14px;
`;

const FaucetLink = styled(ButtonOutlined)`
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  padding: 0px 10px 0px 30px;
  line-height: 30px;
  font-size: 14px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  background-image: url(${DiscordIcon});
  background-size: 14px auto;
  &:active,
  &:hover {
    background-image: url(${DiscordIconBlack});
  }
`;

const Faucet = ({ style, className, url, header, address: initial }) => {
  const [count, setCount] = useState();
  const [loading, setLoading] = useState();
  const [address, setAddress] = useState(initial || "");
  const [lastFaucetFetch, setLastFaucetFetch] = useState(0);

  useEffect(() => {
    const intv = setInterval(checkDiff, 1000);
    checkDiff();
    return () => {
      clearInterval(intv);
    };
  }, []);

  const getPERLs = async address => {
    return await fetch(url || "https://faucet.perlin.net", {
      method: "POST",
      body: JSON.stringify({
        address
      })
    }).then(response => {
      setLastFaucetFetch(Date.now());
      return response.json();
    });
  };

  const fetchPERLs = useCallback(async () => {
    const diff = Date.now() - lastFaucetFetch;
    if (diff > 10000) {
      setLoading(true);
      try {
        const response = await getPERLs(address);
        if (response.result === "ok") {
          alert("Successfully sent 1000 PERLs.");
        } else {
          throw new Error(response.result);
        }
        checkDiff();
      } catch (err) {
        alert("An error occurred: " + err.message || err);
      }
      setLoading(false);
    }
  }, [address]);

  const checkDiff = useCallback(() => {
    const diff = Date.now() - lastFaucetFetch;
    if (diff < 10000) {
      setCount(Math.ceil((10000 - diff) / 1000));
    } else {
      setCount(0);
    }
  }, []);

  const addressChangeHandle = useCallback(event => {
    setAddress(event.target.value);
  }, []);

  return (
      <>
    <Wrapper style={style} className={className}>
      { header ? <h1>Quick PERL Faucet</h1> : ''}
      <CenterContent className="faucet-content">
        {loading ? (
          <LoadingSpinner />
        ) : count === 0 ? (
          <FormWrapper className="faucet-form" onSubmit={fetchPERLs}>
            <StyledInput
              className="faucet-input"
              value={address}
              placeholder="Enter a wallet address"
              onChange={addressChangeHandle}
            />
            <Button className="faucet-submit" type="submit" disabled={!address}>
              Get PERLs
            </Button>
          </FormWrapper>
        ) : (
          count && <h3>You need wait another {count} seconds.</h3>
        )}
      </CenterContent>
      <FaucetText className="faucet-text">
        Need more <b>PERLs</b>? Join our
        <a href="https://discord.gg/dMYfDPM" target="_blank">
          <FaucetLink className="faucet-discord">Discord</FaucetLink>
        </a>
      </FaucetText>
    </Wrapper>
      </>
  );
};

export default Faucet;
