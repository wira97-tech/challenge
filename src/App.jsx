import "./App.css";
import CurrencyConverter from "./components/Currency";
import CountdownTimer from "./components/CountDown";
import Gaji from "./components/HitungGaji";
import "bootstrap/dist/css/bootstrap.min.css";
import Word from "./components/Word";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Page";
import Hero from "./components/MobileLegend";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />}></Route>
        <Route path="/Count" element={<CountdownTimer />}></Route>
        <Route path="/Currency" element={<CurrencyConverter />}></Route>
        <Route path="/Gaji" element={<Gaji />}></Route>
        <Route path="/Word" element={<Word />}></Route>
        <Route path="/Currency" element={<CurrencyConverter />}></Route>
        <Route path="/Ml" element={<Hero />}></Route>
      </Routes>
    </>
  );
}

export default App;
