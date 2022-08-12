import { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import Input from "../forms/Input";
import Button from "../shared/Button";
import BookType from "../../interfaces/Book";
import { createNewbook } from "../../utils/api";

const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.71em;
`;

const Actions = styled.div`
  margin-top: 4.5em;
`;

const NewBookForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<BookType>();
  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<BookType> = async (data) => {
    const { status } = await createNewbook(data);

    if (status === 200) {
      setError("");
      router.reload();
    } else {
      setError(
        "There has been an issue creating your book, verify your data or try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fields>
        <Input label="Title" name="title" register={register} required />
        <Input label="Author" name="author" register={register} required />
        <Input
          type="textarea"
          label="Description"
          name="description"
          register={register}
          required
        />
        <Input
          type="url"
          label="Image URL"
          name="imageUrl"
          register={register}
          required
        />
      </Fields>
      <Actions>
        <Button>Save</Button>
        {error !== "" && <p>{error}</p>}
      </Actions>
    </form>
  );
};

export default NewBookForm;
