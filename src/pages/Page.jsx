import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Pages = () => {
  return (
    <>
      <Card style={{ borderWidth: "4px", borderColor: "red", padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="./src/assets/Pdi.png"
            style={{ width: "100px", height: "100px" }}
          />
          <img
            src="./src/assets/Pdi.png"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Challenge Task
        </h1>
        <Card>
          <Card.Body>
            <Card.Title>CountDown</Card.Title>
            <Card.Text>
              Mini app untuk melakukan hitung mundur dari tanggal dan waktu yang
              ditentukan
            </Card.Text>
            <Link to="/Count">
              <Button variant="primary">Coba</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "10px" }}>
          <Card.Body>
            <Card.Title>Salary Calculator</Card.Title>
            <Card.Text>
              Mini app untuk menghitung perhitungan gaji dari inputan yang
              diberikan
            </Card.Text>
            <Link to="/Gaji">
              <Button variant="primary">Coba</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "10px" }}>
          <Card.Body>
            <Card.Title>Word Scrambel</Card.Title>
            <Card.Text>Mini App untuk bermain acak huruf pada kata</Card.Text>
            <Link to="/Word">
              <Button variant="primary">Coba</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "10px" }}>
          <Card.Body>
            <Card.Title>Currency Converter</Card.Title>
            <Card.Text>
              Mini app untuk konvert mata uang beberapa negara
            </Card.Text>
            <Link to="/Currency">
              <Button variant="primary">Coba</Button>
            </Link>
          </Card.Body>
        </Card>
        {/* <Card style={{ marginTop: "10px" }}>
          <Card.Body>
            <Card.Title>Mobile Legend</Card.Title>
            <Card.Text>
              Mini app untuk konvert mata uang beberapa negara
            </Card.Text>
            <Link to="/Ml">
              <Button variant="primary">Coba</Button>
            </Link>
          </Card.Body>
        </Card> */}
      </Card>
    </>
  );
};

export default Pages;
