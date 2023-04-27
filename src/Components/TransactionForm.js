import React, {useState} from 'react';

const TransactionForm = ({onAddTransaction}) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onAddTransaction({date, description, category, amount});
        setDescription('');
        setCategory('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
            type="text"
            placeholder='Date'
            value={date}
            onChange={e => setDate(e.target.value)}/>
            <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <input
            type='text'
            placeholder='Category'
            value={category}
            onChange={e => setCategory(e.target.value)}
            />
            <input
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;