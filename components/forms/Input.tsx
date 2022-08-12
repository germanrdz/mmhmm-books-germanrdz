import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";

import BookType from "../../interfaces/Book";

const URL_PATTERN_VALIDATION =
  "[Hh][Tt][Tt][Pp][Ss]?://(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::d{2,5})?(?:/[^s]*)?";

type Props = {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<BookType>;
  required?: boolean;
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;

  label {
    font-weight: 700;
    font-size: 1em;
  }
  input,
  textarea {
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 1em;
  }
`;

const Input = ({
  register,
  label,
  name,
  required = false,
  type = "text",
}: Props) => (
  <Container>
    <label>{label}</label>

    {type === "text" && (
      <input type="text" required={required} {...register(name as any)} />
    )}

    {type === "url" && (
      <input
        type="url"
        pattern={URL_PATTERN_VALIDATION}
        required={required}
        {...register(name as any)}
      />
    )}

    {type === "textarea" && (
      <textarea required={required} {...register(name as any)} rows={6} />
    )}
  </Container>
);

export default Input;
