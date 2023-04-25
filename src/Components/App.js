import React, {useState, useEffect } from 'react'
import TransactionList from './TransactionList'
import TransactionForm from './TransactionForm';

function App() {

    const [transactions, setTransactions] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    //Fetching from the db.json happens here
    
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then (response => response.json())
        .then(transactions => setTransactions(transactions));
        }, []);

    //Updating state to add a new transaction

    const handleAddTransaction = newTransaction =>{
      setTransactions([...transactions, newTransaction]);
    };

    //Handler for search

    const handleSearch = word => {
      setSearchWord(word)
    };

    const filteredTransactions = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(searchWord.toLowerCase());
    });
    
  return (
    <div>
        <h1>Transactions</h1>
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <SearchBar onSearch={handleSearch} />
        <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

export default App;