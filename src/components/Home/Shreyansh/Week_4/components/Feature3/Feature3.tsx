import React, { useState, useEffect } from 'react';
import { Feature3Wrapper } from './Feature3Style';
import { APIKEY } from './utils';

const Feature3: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch(`${APIKEY}${baseCurrency}`);
      const data = await response.json();
      setExchangeRate(data.rates[targetCurrency]);
    };
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetCurrency(e.target.value);
  };

  const convertCurrency = () => {
    return amount * exchangeRate;
  };

  return (
    <Feature3Wrapper>
      <div className='currencyConverterContainer'>
        <h2>Currency Converter</h2>
        <div>
          <label>Amount:</label>
          <input id='currencyInput' type='number' value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label>From:</label>
          <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='INR'>INR</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='INR'>INR</option>
          </select>
        </div>
        <div>
          <p>
            Result: {convertCurrency()} {targetCurrency}
          </p>
        </div>
      </div>
    </Feature3Wrapper>
  );
};

export default Feature3;
