import React from 'react'

function TransactionList({transactions}) {
  return (
    <div className='transaction-list'>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>  
            <tbody>
                
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
};

export default TransactionList;