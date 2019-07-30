import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonOutlined, StyledInput, WhiteButton } from "./core";
import DiscordIcon from "./assets/svg/discord-icon.svg";
import DiscordIconBlack from "./assets/svg/discord-icon-black.svg";
import { Flex } from "@rebass/grid";
import styled from "styled-components";
import LoadingSpinner, { Spinner } from "./LoadingSpinner.jsx";

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-weight: normal;
  color: white;
  background-color: #171d39;
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
        border-radius: 5px 0px 0px 5px;
        flex-grow: 1;
        height: 58px;
        padding: 0px;
        margin: 0;
        width: auto;
    }
    ${Button} {
        height: 58px;
        font-size: 16px;
        font-weight: 600;
        font-family: sans-serif;
        background-color: #fff;
        color: #151b35;
        border-radius: 5px;
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
  height: 70px;
  margin-bottom: 40px;
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

const Faucet = ({ style, className, url }) => {
  const [count, setCount] = useState();
  const [loading, setLoading] = useState();
  const [address, setAddress] = useState("");
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
    <Wrapper style={style} className={className}>
      <h1>Quick PERL Faucet</h1>
      <CenterContent>
        {loading ? (
          <LoadingSpinner />
        ) : count === 0 ? (
          <FormWrapper onSubmit={fetchPERLs}>
            <StyledInput
              value={address}
              placeholder="Enter a wallet"
              onChange={addressChangeHandle}
            />
            <Button type="submit" disabled={!address}>
              Get PERLs
            </Button>
          </FormWrapper>
        ) : (
          count && <h3>You need wait another {count} seconds.</h3>
        )}
      </CenterContent>
      <div>
        You can get more PERLs on the chat
        <a href="https://discord.gg/dMYfDPM" target="_blank">
          <FaucetLink>Faucet</FaucetLink>
        </a>
      </div>
    </Wrapper>
  );
};

export default Faucet;
