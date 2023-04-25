import React, {useState, useEffect } from 'react'
import TransactionList from './TransactionList'

function App() {

    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then (response => response.json())
        .then(transactions => setTransactions(transactions));
        }, []);
    
  return (
    <div>
        <TransactionList transactions/>
    </div>
  )
}

export default App;