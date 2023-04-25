import React, {useState} from 'react';

const TransactionForm = ({onAddTransaction}) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onAddTransaction({description, category, amount});
        setDescription('');
        setCategory('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}/>
            <input/>
            <input/>
        </form>
    )
}