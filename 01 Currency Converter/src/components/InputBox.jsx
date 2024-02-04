import React, { useId } from "react";

function InpuBox({
  label = "From",
  amount,
  currencyOptions = [],
  className = "",
  onCurrencyChange,
  onAmountChange,
  amountDisable,
  currenyDisable,
  selectCurrency = "usd",
}) {
  const inputLabelId = useId();
  const selectLabelId = useId();
  return (
    <div className={`flex p-3 text-sm bg-white rounded-lg mb-3 ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={inputLabelId}
          value={label}
          className="w-full text-black/50 text-base font-sans font-medium inline-block mb-1.5"
        >
          {label}
        </label>
        <input
          id={inputLabelId}
          type="number"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          className="text-black my-2 outline-none"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label
          htmlFor={selectLabelId}
          className="text-black/50 text-base font-sans font-medium block w-full mb-1.5"
        >
          Currency Type
        </label>
        <select
          className="px-0.5 py-0.5 bg-gray-200/65 cursor-pointer outline-none rounded-md my-2"
          id={selectLabelId}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currenyDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InpuBox;
