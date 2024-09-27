import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Film1 from "../assets/img/content/deadpool.jpg";
import Film2 from "../assets/img/content/kimi.jpg";
import Film3 from "../assets/img/content/Tenki.jpg";
import Film4 from "../assets/img/content/deadpool2.jpg";

const Film = () => {
  return (
    <div className="Film">
      <Container>
        <br></br>
        <br></br>
        <h1 className="text-white">ANIME FAVORITE</h1>
        <Row className="container">
          <Col md={4} className="movieWrapper">
            <Card className=" movieImg">
              <Image src={Film1} alt="bgimg" className="Images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Anime</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImg">
              <Image src={Film2} alt="bgimg" className="Images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Anime</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImg">
              <Image src={Film3} alt="bgimg" className="Images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Anime</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImg">
              <Image src={Film4} alt="bgimg" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Anime</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Film;
