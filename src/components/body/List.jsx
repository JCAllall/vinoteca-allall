import { useContext, useState } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { Gin } from "../../data/Gin";
import { Whiskeys } from "../../data/Whiskeys";
import { Vinos } from "../../data/Vinos";
import { Espumantes } from "../../data/Espumantes";
import randomItems from "../../utils/randomItems";
import useQuery from "../../hooks/useQuery";
import { useEffect } from "react";
import AppContext from "../../hooks/appContext";

const List = () => {
  const { setItemsInCart, itemsInCart, search } = useContext(AppContext);
  const query = useQuery();
  const [items, setItems] = useState(
    randomItems(Gin, Whiskeys, Vinos, Espumantes)
  );

  useEffect(() => {
    const category = query.get("category");

    if (category === "gin" && search === "") {
      setItems(Gin);
    } else if (category === "whiskies" && search === "") {
      setItems(Whiskeys);
    } else if (category === "vinos" && search === "") {
      setItems(Vinos);
    } else if (category === "espumantes" && search === "") {
      setItems(Espumantes);
    } else if (search === "" && category === null) {
      setItems(randomItems(Gin, Whiskeys, Vinos, Espumantes));
    }
  }, [query, search]);

  useEffect(() => {
    if (search.length) {
      const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setItems(filteredItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onClickAddToCart = (item) => {
    setItemsInCart([...itemsInCart, item]);
    localStorage.setItem("cart", JSON.stringify([...itemsInCart, item]));
  };

  return (
    <Row xs={1} md={2} className="g-4 mt-2">
      {items.map((item) => (
        <Col key={item.id}>
          <Card
            key={item.id}
            style={{ height: "700px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={item.image} height={300} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Precio: ${item.price}</Card.Text>
              <Card.Text>Stock: {item.stock}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Button
                variant="success"
                size="lg"
                onClick={() => onClickAddToCart(item)}
              >
                Agregar al carrito
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default List;
