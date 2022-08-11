import styled from "styled-components";

import Title from "../shared/Title";
import NewBookForm from "./NewBookForm";

const Content = styled.div`
  margin-top: 5em;
`;

const NewBook = () => (
  <>
    <Title text="Add a new book" />
    <Content>
      <NewBookForm />
    </Content>
  </>
);

export default NewBook;
