import styled from "styled-components";
import {Flex} from "@rebass/grid";

export const ErrorMessage = styled.div`
    margin: 10px 0;
    color: red;
`;

export const Card = styled(Flex)`
    background-color: #0e1a49;
    border-radius: 2px;
    width: 100%;
    padding: 15px 20px;
    min-width: 300px;
    min-height: 100px;
    ${props =>
    props.showBoxShadow
        ? "box-shadow: 0 0 12px 6px rgba(155, 155, 155, 0.045);"
        : ""}
`;
Card.defaultProps = {
    showBoxShadow: true
};

export const Button = styled.button`
    width: ${props => props.width};
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: HGGrotesk, sans-serif;
    font-size: ${props => props.fontSize};
    font-weight: normal;
    color: #fff;
    background-color: #23228e;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled,
    &[disabled] {
        pointer-events: none;
        cursor: default;
        opacity: 0.3;
    }

    ${props => props.hideOverflow ? `
        text-overflow: ellipsis;
        overflow: hidden;
    `
    : ""}

    &:active {
        background-color: rgba(34, 34, 142, 0.5);
    }

    &:focus {
        outline: none;
    }
`;
Button.defaultProps = {
    width: "160px",
    fontSize: "16px",
    hideOverflow: false
};

export const ButtonOutlined = styled(Button)`
    background: none;
    color: rgba(255, 255, 255, 0.8);
    border: solid 2px #fff;
    border-radius: 5px;
    font-weight: 600;
    height: auto;
    width: auto;
    padding-left: 15px;
    padding-right: 15px;

    &:hover,
    &:active {
        color: #151a36;
        background-color: #fff;
        border-color: #fff;
    }
`;

export const Input = styled.input`
    outline: none;
    border: none;
    min-width: 200px;
    border-radius: 2px;
    height: 35px;
    background-color: #fff;
    padding: 10px 15px;
    font-family: HGGrotesk, sans-serif;
    font-weight: normal;
    font-size: ${props => props.fontSize};
    width: ${props => props.width};

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #717985;
        opacity: 0.8;
    }
    &:disabled {
        background-color: #ddd;
    }
`;
Input.defaultProps = {
    width: "auto",
    fontSize: "14px"
};

export const WhiteButton = styled.button`
    width: 100%;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    border: none;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    color: #151b35;
    font-size: 16px;
    border-radius: 5px;
`;

export const StyledInput = styled(Input)`
    font-family: HGGrotesk, sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: #121834;
    border-radius: 5px;
    border: 1px solid #2e345100;
    color: white;
    width: 100%;
    padding: 15px;
    min-width: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 48px;
    transition: all 0.2s ease;

    &:hover {
        cursor: text;
        border: 1px solid #4a41d1;
    }
    &:focus {
        border: 1px solid #4a41d1;
        outline: 0;
    }
    &::placeholder {
        font-size: 16px;
    }
`;
