import styled from "styled-components";
import Advice from "./components/Advice";

function App() {
  return (
    <Body>
      <Advice />
    </Body>
  );
}

export default App;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202733;
  padding: 0 1.6rem;
`;
