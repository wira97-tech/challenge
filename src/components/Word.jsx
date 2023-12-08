// src/components/WordScramble.js
import React, { useState, useEffect } from "react";
import { Alert, Button, Card, CardBody, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const words = [
  "strawberry",
  "tower",
  "crocodile",
  "giraffe",
  "pocket",
  "longhorn",
];

const Word = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const generateScrambledWord = () => {
    const currentWord = words[wordIndex];
    const shuffledWord = currentWord
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    setWord(currentWord);
    setScrambledWord(shuffledWord);
  };

  const checkGuess = () => {
    setAttempts((prevAttempts) => prevAttempts + 1);
    setIsCorrect(guess.toLowerCase() === word.toLowerCase());
    if (guess.toLowerCase() === word.toLowerCase()) {
      setCorrectCount((prevCount) => prevCount + 1);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAttempts(0);
        setIsCorrect(false);
        setGuess("");
      }, 2000);
    }
  };

  useEffect(() => {
    generateScrambledWord();
  }, [wordIndex]);

  return (
    <div>
      <Link to="/">
        <Button variant="primary">Kembali</Button>
      </Link>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Word Scramble
      </h1>
      <Card>
        <CardBody>
          {isCorrect && (
            <div>
              <p>Selamat! Tebakanmu benar.</p>
            </div>
          )}
          {attempts > 0 && !isCorrect && (
            <div>
              <Alert className="bg-danger" style={{ color: "white" }}>
                Salah guys. Coba lagi!
              </Alert>
            </div>
          )}
          <p>Skor: {correctCount}</p>
          <h1>Kata yang diacak</h1>
          <p>{scrambledWord}</p>
          <Form>
            <Form.Group controlId="formGuess">
              <Form.Label>Tebakanmu:</Form.Label>
              <Form.Control
                className="w-50"
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={isCorrect}
              />
            </Form.Group>
            <Button
              onClick={checkGuess}
              style={{ marginTop: "10px", backgroundColor: "blue" }}
            >
              Cek Jawaban
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Word;
