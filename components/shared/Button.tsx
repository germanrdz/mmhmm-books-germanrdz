import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick(): void;
};

const Container = styled.button`
  background: #199c7d;
  border-radius: 0.42em;

  padding: 1em 1.5em;
  border: none;

  color: #fff;
  font-weight: 700;
  font-size: 1.285em;

  :hover {
    cursor: pointer;
  }
`;

const Button = ({ onClick, children }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
