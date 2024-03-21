import React, { useState } from 'react';
import { ExpenseTrackerWrapper } from './ExpenseTrackerStyle';
import { Expense } from './interface';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const handleAddExpense = (): void => {
    if (description.trim() !== '' && amount > 0) {
      const newExpense: Expense = {
        id: expenses.length + 1,
        description: description.trim(),
        amount: amount
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setDescription('');
      setAmount(0);
    }
  };

  const handleRemoveExpense = (id: number): void => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  return (
    <ExpenseTrackerWrapper>
      <div className='budgetContainer'>
        <h2>Expense Tracker</h2>
        <div className='expenseForm'>
          <input type='text' value={description} placeholder='Enter expense description' onChange={(e) => setDescription(e.target.value)} />
          <input type='number' value={amount} placeholder='Enter expense amount' onChange={(e) => setAmount(parseFloat(e.target.value))} />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
        <ul className='expenseList'>
          {expenses.map((expense) => (
            <li key={expense.id} className='expenseItem'>
              <span id='description'>{expense.description}</span> &#8377; &nbsp;{expense.amount}
              <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className='totalExpenses'>Total Expenses: &#8377;{totalExpenses}</div>
      </div>
    </ExpenseTrackerWrapper>
  );
};

export default ExpenseTracker;
