import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  color: ${props => props.color || "#9E9E9E"};
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  background-color: transparent;
  border: none;
  cursor: pointer;
  gap: 10px 10px;
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  height: "36px";
  border-bottom: 1px solid ${props => props.color || "#9E9E9E"};
  padding-bottom: 7px;
  cursor: pointer;
  padding: 4px, 4px, 8px, 4px;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
const ButtonSecondary = ({ onClick, title, color, icon }) => {
  return (
    <StyledDiv>
      <StyledButton
        type="button"
        onClick={onClick}
        color={color}
      >
        {icon}
        {title}
      </StyledButton>
    </StyledDiv>
  );
};

export default ButtonSecondary;
