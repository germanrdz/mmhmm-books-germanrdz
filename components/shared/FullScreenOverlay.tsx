import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 8em auto;
  padding: 0 2em;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5em;
  right: 1em;
  background: none;
  border: none;

  color: #afafaf;
  font-size: 2em;

  :hover {
    cursor: pointer;
  }
`;

const FullScreenOverlay = ({ children, isOpen, onClose }: Props) => {
  return isOpen ? (
    <Overlay>
      <Container>
        {children}
        <CloseButton onClick={() => onClose()}>X</CloseButton>
      </Container>
    </Overlay>
  ) : null;
};

export default FullScreenOverlay;
