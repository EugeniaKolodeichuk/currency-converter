import shortid from "shortid";
import style from "./Converter.module.css";

export default function Converter(props) {
  const {
    options,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <div className={style.container}>
      <input
        type="number"
        value={amount}
        onChange={onChangeAmount}
        className={style.input}
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        className={style.select}
      >
        {options.map((option) => (
          <option key={shortid.generate()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
