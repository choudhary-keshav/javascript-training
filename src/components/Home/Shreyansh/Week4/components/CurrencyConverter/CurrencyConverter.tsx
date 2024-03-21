import React, { useState, useEffect } from 'react';
import { CurrencyConverterWrapper } from './CurrencyConverterStyle';
import { APIKEY } from './utils';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const currencies = ['USD', 'EUR', 'INR'];

  useEffect(() => {
    const fetchExchangeRate = async (): Promise<void> => {
      const response = await fetch(`${APIKEY}${baseCurrency}`);
      const data = await response.json();
      setExchangeRate(data.rates[targetCurrency]);
    };
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const generateCurrencyOptions = (): JSX.Element[] => {
    return currencies.map((currency: string) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  };

  return (
    <CurrencyConverterWrapper>
      <div className='currencyConverterContainer'>
        <h2>Currency Converter</h2>
        <div>
          <label>Amount:</label>
          <input id='currencyInput' type='number' value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label>From:</label>
          <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            {generateCurrencyOptions()}
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {generateCurrencyOptions()}
          </select>
        </div>
        <div>
          <p>
            Result: {amount * exchangeRate} {targetCurrency}
          </p>
        </div>
      </div>
    </CurrencyConverterWrapper>
  );
};

export default CurrencyConverter;
