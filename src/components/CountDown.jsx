// src/App.jsx
import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountdownTimer = () => {
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [counting, setCounting] = useState(false);

  const handleDateTimeChange = (e) => {
    const selectedDateTime = new Date(e.target.value);

    // Check if selected date and time are not in the past
    if (selectedDateTime < new Date()) {
      alert("Pilih waktu yang sesuai Boss, seneng banget sama masa lalu!");
      setSelectedDateTime("");
      return;
    }

    setSelectedDateTime(e.target.value);
  };

  const handleStartCount = () => {
    setCounting(!counting);
  };

  const handleReset = () => {
    setCounting(false);
    setSelectedDateTime("");
    setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  const calculateTimeRemaining = () => {
    const targetDate = new Date(selectedDateTime);
    const now = new Date();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setCounting(false);
    }
  };

  useEffect(() => {
    let interval;

    if (counting) {
      interval = setInterval(() => {
        calculateTimeRemaining();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counting, selectedDateTime]);

  return (
    <div style={{ alignItems: "center" }}>
      <Link to="/">
        <Button variant="primary">Kembali</Button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Countdown Time</h1>
      <Card style={{ borderWidth: "2px solid black", padding: "2 rem" }}>
        <Card.Body>
          <Form.Label>Masukkan Tanggal dan Waktu</Form.Label>
          <Form.Control
            type="datetime-local"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            className="w-25"
          />
          <div className="mt-3">
            <Button onClick={handleStartCount} style={{ marginRight: "1rem" }}>
              {counting ? "Hitung Mundur..." : "Start"}
            </Button>
            <Button onClick={handleReset} className="bg-danger">
              Reset
            </Button>
          </div>
          <div className="mt-3">
            <p>
              Countdown: {timeRemaining.days} hari, {timeRemaining.hours} jam,{" "}
              {timeRemaining.minutes} menit, {timeRemaining.seconds} detik
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountdownTimer;
