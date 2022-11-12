import { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import AppContext from "../../hooks/appContext";

const Search = () => {
  const { setSearch } = useContext(AppContext);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container className="m-6">
      <Form className="d-flex">
        <Form.Control
          onChange={onChange}
          type="search"
          placeholder="Buscar..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Container>
  );
};

export default Search;
