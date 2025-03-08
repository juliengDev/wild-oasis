import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("Check In")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Heading as="h3">Form</Heading>
          <Row>
            <Input
              type="number"
              min={0}
              max={10}
              placeholder="Number of guests"
            />
            <Input
              type="number"
              min={0}
              max={10}
              placeholder="Number of guests"
            />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
