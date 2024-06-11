import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #f8f8ff;
  border-radius: 50%;
  border: none;
  color: #d3d3d3;
  width: 30px;
  height: 30px;
`;

const Button = ({ onClick }: { onClick: () => void }) => {
  return <StyledButton onClick={onClick}>X</StyledButton>;
};

export default Button;
