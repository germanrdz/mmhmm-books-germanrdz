import styled from "styled-components";

type Props = {
  text: string;
};

const Container = styled.h1`
  font-size: 3em;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Title = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

export default Title;
