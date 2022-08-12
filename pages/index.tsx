import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import type BookType from "../interfaces/Book";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import Book from "../components/books/Book";
import FullScreenOverlay from "../components/shared/FullScreenOverlay";
import NewBook from "../components/books/NewBook";
import { getAllBooks, removeBook } from "../utils/api";
import Router from "next/router";

type Props = {
  books: BookType[];
};

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

const Home: NextPage<Props> = ({ books }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [removingId, setRemovingId] = useState<string>("");

  const handleRemoveBook = async (bookId: string) => {
    if (!bookId) return;

    const { status } = await removeBook(bookId);

    if (status === 200) {
      Router.reload();
    } else {
      setError("There was an error deleting your book.");
    }
  };

  return (
    <Container>
      <Head>
        <title>Books</title>
      </Head>

      <Header>
        <Title text="Bookshelf" />
        <Button onClick={() => setIsOpen(true)}>Add book</Button>
      </Header>

      <BooksList>
        {error !== "" && <p>{error}</p>}
        {books.length === 0 && <p>There are no books.</p>}
        {books
          .filter((book) => book.id !== removingId)
          .map((book) => (
            <Book
              onRemove={() => handleRemoveBook(book.id as string)}
              key={book.id}
              book={book}
            />
          ))}
      </BooksList>

      <FullScreenOverlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewBook />
      </FullScreenOverlay>
    </Container>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data: books } = await getAllBooks();

  return {
    props: { books },
  };
};
