import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      {console.log(productsArr)}
      <Row xs={1} md={2} className="g-4 row">
        {productsArr.map((ele, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Title>{ele.title}</Card.Title>
              <Card.Img
                variant="top"
                src={ele.imageUrl}
                className="hover-zoom"
              />
              <Card.Body>
                <div className="card-detail">
                  <h3>$ {ele.price}</h3>
                  <Button variant="primary">Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
