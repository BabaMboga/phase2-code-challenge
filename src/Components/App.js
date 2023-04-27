import React, {useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './app.css';

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
    

    fetch('',{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())

    .catch(error => console.log(error));

  }
    //Handler for search

    const handleSearch = word => {
      setSearchWord(word)
    };

    const handleDelete = id => {
      const newData = transactions.filter(transactions => transactions.id !==id);
      setTransactions(newData);
    

    fetch('', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
       .then(response => response.json())
       .then(transactions => console.log(transactions))
       .catch(error => console.log(error));
  };
    const filteredTransactions = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(searchWord.toLowerCase());
    });

   
    
  return (
    <div className="container">
        <h1 className='heading'>Transactions</h1>
        <TransactionForm onAddTransaction={handleAddTransaction}  />
        <SearchBar onSearch={handleSearch} className='search-bar' />
        <TransactionList transactions={filteredTransactions} handleDelete={handleDelete} />
    </div>
  );
};

export default App;