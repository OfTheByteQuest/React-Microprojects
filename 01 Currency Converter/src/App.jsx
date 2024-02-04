import { useState } from "react";

import { InputBox } from "./components";
import useCurrency from "./customHooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const options = useCurrency(fromCurrency);
  const currencyOptions = Object.keys(options);

  const convert = () => {
    setConvertedAmount(amount * options[toCurrency]);
  };

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <>
      <div
        className="mx-auto w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/pexels-jorge-marcelino-11107635.jpg)`,
        }}
      >
        <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 bg-white/30 backdrop-blur-sm">
          <form
            className="rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setFromCurrency(currency)}
              selectCurrency={fromCurrency}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <div className="relative w-full h-1 -mt-1">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 pt-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              selectCurrency={toCurrency}
              onAmountChange={(convertedAmount) =>
                setConvertedAmount(convertedAmount)
              }
              amountDisable
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center"
            >{`Convert from ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
