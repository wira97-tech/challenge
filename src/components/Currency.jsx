import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("IDR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const exchangeRates = {
    IDR: 1,
    USD: 0.000071,
    CNY: 0.00046,
    JPY: 0.008,
    EUR: 0.000063,
    SGD: 0.000096,
    GBP: 0.000056,
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    const amountInBaseCurrency = amount / exchangeRates[fromCurrency];
    const amountInSelectedCurrency =
      amountInBaseCurrency * exchangeRates[toCurrency];
    const convertedAmount = amountInSelectedCurrency.toFixed(2);
    setResult(
      `${amount} ${fromCurrency} setara dengan ${convertedAmount} ${toCurrency}`
    );
    setIsConverting(true);
  };

  return (
    <div>
      <Link to="/">
        <Button variant="primary">Kembali</Button>
      </Link>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Currency Converter
      </h1>
      <Card>
        <CardBody>
          <div>
            <div className="d-flex">
              <label style={{ marginRight: "10px" }}>
                <FormControl
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </label>
              <label style={{ marginRight: "10px" }}>
                <FormSelect
                  value={fromCurrency}
                  onChange={handleFromCurrencyChange}
                >
                  {Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </FormSelect>
              </label>
              <label style={{ marginRight: "10px" }}>
                <FormSelect
                  value={toCurrency}
                  onChange={handleToCurrencyChange}
                >
                  {Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </FormSelect>
              </label>
              <Button onClick={handleConvert} style={{ marginRight: "10px" }}>
                Convert
              </Button>
            </div>
            {isConverting && (
              <div
                style={{
                  width: "25rem",
                  height: "auto",
                  padding: "5px",
                  border: "1px solid #ccc",
                  marginTop: "10px",
                }}
              >
                <p>{result}</p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CurrencyConverter;
