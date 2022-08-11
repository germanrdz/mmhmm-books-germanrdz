import styled from "styled-components";

type Props = {
  label: string;
  name: string;
  type?: string;
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

const Input = ({ label, name, type = "text" }: Props) => (
  <Container>
    <label>{label}</label>
    {type === "text" && <input type="text" name={name} />}
    {type === "textarea" && <textarea name={name} rows={6} />}
  </Container>
);

export default Input;
