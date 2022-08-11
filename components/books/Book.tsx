import styled from "styled-components";

import Card from "../shared/Card";

type Props = {
  id: string;
  description: string;
  imageUrl: string;
  author: string;
  title: string;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 125px 1fr;
  grid-gap: 1.14em;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

const Title = styled.div`
  font-size: 1.42em;
  font-weight: 700;
`;

const Author = styled.div`
  font-size: 0.857em;
  color: #5f5f5f;
  font-weight: 500;
  line-height: 150%;
`;

const Body = styled.div`
  font-weight: 400;
  font-size: 1em;
  line-height: 150%;
`;

const Book = () => (
  <Card>
    <Container>
      <div>imagen</div>
      <Description>
        <Title>Atomic Habits</Title>
        <Author>James Clear</Author>
        <Body>
          No matter your goals, Atomic Habits offers a proven framework for
          improving--every day. James Clear, one of the world's leading experts
          on habit formation, reveals practical strategies that will teach you
          exactly how to form good habits, break bad ones, and master the tiny
          behaviors that lead to remarkable results.
        </Body>
      </Description>
    </Container>
  </Card>
);

export default Book;
