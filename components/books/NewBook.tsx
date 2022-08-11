import styled from "styled-components";

import Title from "../shared/Title";

const Content = styled.div`
  margin-top: 5em;
`;

const NewBook = () => (
  <>
    <Title text="Add a new book" />
    <Content>new book form</Content>
  </>
);

export default NewBook;
