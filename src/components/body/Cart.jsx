import { useContext } from "react";
import { Container, Stack, Col, Card, Row, Button } from "react-bootstrap";
import AppContext from "../../hooks/appContext";
import { AiFillDelete, AiFillShopping } from "react-icons/ai";

const Cart = () => {
  const { itemsInCart, setItemsInCart } = useContext(AppContext);

  const SumItemsInCart = itemsInCart.reduce((acc, item) => {
    const itemInAcc = acc.find((accItem) => accItem.id === item.id);
    if (itemInAcc) {
      itemInAcc.quantity += 1;
      itemInAcc.price += item.price;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const deleteItem = (id) => {
    const newItemsInCart = itemsInCart.filter((item) => item.id !== id);
    setItemsInCart(newItemsInCart);
    localStorage.setItem("cart", JSON.stringify(newItemsInCart));
  };

  const deleteCart = () => {
    setItemsInCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col>
          {SumItemsInCart.length > 0 ? (
            <Stack gap={1}>
              {SumItemsInCart.map((item) => (
                <Card key={item.id}>
                  <div className="d-flex justify-content-center align-items-center">
                    <Card.Img src={item.image} style={{ width: "50px" }} />
                    <Card.Body>
                      <Card.Text>{item.name}</Card.Text>
                      <Card.Text>${item.price}</Card.Text>
                      <Card.Text>Cantidad: {item.quantity}</Card.Text>
                    </Card.Body>
                    <Button
                      onClick={() => deleteItem(item.id)}
                      style={{ marginRight: "10px" }}
                      variant="danger"
                    >
                      Borrar
                      <AiFillDelete />
                    </Button>
                  </div>
                </Card>
              ))}
            </Stack>
          ) : (
            <h1>No hay productos en el carrito</h1>
          )}
        </Col>

        <Col>
          <h2>Su carrito:</h2>
          <h3>
            Total: ${itemsInCart.reduce((acc, item) => acc + item.price, 0)}
          </h3>
          <Button style={{ marginRight: "10px" }} variant="success">
            Finalizar compra
            <AiFillShopping />
          </Button>
          <Button
            style={{ marginRight: "10px" }}
            variant="danger"
            onClick={deleteCart}
          >
            Vaciar carrito
            <AiFillDelete />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
