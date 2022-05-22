import styled from "styled-components";

export default function Button({ content }) {
    return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(120deg, #14163c, #0095ff);
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  //padding: 0.2rem;
  margin: 0.5rem;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: all .4s ease-in-out;

  &:hover {
    transition: all .4s ease-in-out;
    background: linear-gradient(120deg, #0095ff, #14163c);
  }
`;