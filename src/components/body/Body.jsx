import Paragraph from "./Paragraph";
import Search from "./Search";
import List from "./List";
import { Container } from "react-bootstrap";

const Body = () => {
  return (
    <Container className="body" style={{ marginTop: "100px" }}>
      <Paragraph />
      <Search />
      <List />
    </Container>
  );
};

export default Body;
