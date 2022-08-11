import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Title from "../components/shared/Title";

const Container = styled.div`
  max-width: 624px;
  margin: 8em auto;
  padding: 2em;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;

  margin-bottom: 50px;
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
        <div>Add Book</div>
      </Header>

      <BooksList>
        <div>book</div>
        <div>book</div>
        <div>book</div>
        <div>book</div>
      </BooksList>
    </Container>
  );
};

export default Home;
