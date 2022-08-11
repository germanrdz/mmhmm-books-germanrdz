import styled from "styled-components";
import Image from "next/image";

import Card from "../shared/Card";
import type BookType from "../../interfaces/Book";

type Props = {
  book: BookType;
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
  align-content: flex-start;
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

const Book = ({ book }: Props) => (
  <Card>
    <Container>
      <Image
        src={book.imageUrl}
        alt={`${book.title} cover`}
        width={125}
        height={200}
      />
      <Description>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        <Body>{book.description}</Body>
      </Description>
    </Container>
  </Card>
);

export default Book;
