import React from 'react';
import { Table, TableHead, TableBodyRow } from './transaction.styled'
import PropTypes from 'prop-types';
// import items from './transactions.json';


export const TransactionHistory = ({items}) => {
    return (
<Table>
    <TableHead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
  </TableHead>

    <tbody>
        {items.map(({id, type, amount, currency}) => (
            <TableBodyRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </TableBodyRow>
    ))}
    
    </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
    
}
