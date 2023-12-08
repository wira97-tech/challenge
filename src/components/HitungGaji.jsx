// Import yang diperlukan
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gaji = () => {
  const [pokok, setPokok] = useState("");
  const [tunjangan, setTunjangan] = useState("");
  const [kewajiban, setKewajiban] = useState("");
  const [gajiKotor, setGajiKotor] = useState(null);
  const [gajiBersih, setGajiBersih] = useState(null);

  const handleGajiChange = (e) => {
    setPokok(e.target.value);
  };

  const handleTunjanganChange = (e) => {
    setTunjangan(e.target.value);
  };

  const handleKewajibanChange = (e) => {
    setKewajiban(e.target.value);
  };

  const hitungGaji = () => {
    // ubah ke number
    const gajiPokok = parseFloat(pokok) || 0;
    const gajiTunjangan = parseFloat(tunjangan) || 0;
    const Kewajiban = parseFloat(kewajiban) || 0;

    // hitung gaji kotor
    const gajiKotor = gajiPokok + gajiTunjangan;
    setGajiKotor(gajiKotor);

    // hitung gaji bersih
    const gajiBersih = gajiKotor - Kewajiban;
    setGajiBersih(gajiBersih);
  };

  return (
    <div>
      <Link to="/">
        <Button variant="primary">Kembali</Button>
      </Link>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Hitung Gaji
      </h1>
      <Card className="w-75 mx-auto">
        <CardBody className="mx-auto">
          <div className="d-flex">
            <div className="me-5">
              <Form.Label>Gaji Pokok</Form.Label>
              <Form.Control
                className="Form"
                value={pokok}
                id="input"
                placeholder="dalam Rupiah"
                onChange={handleGajiChange}
              />
              <Form.Label>Tunjangan</Form.Label>
              <Form.Control
                className="Form"
                value={tunjangan}
                id="input"
                placeholder="dalam Rupiah"
                onChange={handleTunjanganChange}
              />
              <Form.Label>Kewajiban Pokok</Form.Label>
              <Form.Control
                className="Form"
                value={kewajiban}
                id="input"
                placeholder="dalam Rupiah"
                onChange={handleKewajibanChange}
              />
              <Button className="mt-3" variant="primary" onClick={hitungGaji}>
                Hitung Gaji
              </Button>
            </div>
            <div>
              <h3>Hasil:</h3>
              <p>Gaji Kotor : Rp. {gajiKotor}</p>
              <p>Gaji Pokok : Rp. {pokok}</p>
              <p>Gaji Bersih : Rp. {gajiBersih}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Gaji;
