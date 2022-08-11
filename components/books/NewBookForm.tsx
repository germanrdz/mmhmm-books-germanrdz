import styled from "styled-components";

import Input from "../forms/Input";
import Button from "../shared/Button";

const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.71em;
`;

const Actions = styled.div`
  margin-top: 4.5em;
`;

const NewBookForm = () => (
  <form>
    <Fields>
      <Input label="Name" name="name" />
      <Input label="Author" name="author" />
      <Input type="textarea" label="Description" name="description" />
      <Input label="Image URL" name="imageUrl" />
    </Fields>
    <Actions>
      <Button onClick={() => console.log("save")}>Save</Button>
    </Actions>
  </form>
);

export default NewBookForm;
