import { useEffect, useState } from "react";
import style from "./Header.module.css";

const BASE_URL = process.env.REACT_APP_URL;

export default function Header() {
  const [euro, setEuro] = useState(1);
  const [usd, setUsd] = useState(1);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setEuro(data.rates.UAH);
        setUsd((data.rates.EUR / data.rates.USD) * data.rates.UAH);
      });
  }, []);

  return (
    <header className={style.header}>
      <h2>Exchange rate today</h2>
      <div>
        <p>
          USD: <b>{usd?.toFixed(2)}</b>
        </p>
        <p>
          EUR: <b>{euro?.toFixed(2)} </b>
        </p>
      </div>
    </header>
  );
}
