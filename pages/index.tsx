import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import Book from "../components/books/Book";

const Container = styled.div`
  max-width: 624px;
  margin: 8em auto;
  padding: 2em;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 3.57em;
`;

const BooksList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3em;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Books</title>
      </Head>

      <Header>
        <Title text="Bookshelf" />
        <Button onClick={() => console.log("add book")}>Add book</Button>
      </Header>

      <BooksList>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </BooksList>
    </Container>
  );
};

export default Home;
