import { TableRow, TableData } from './TransactionHistory.styled';

export const Transaction = ({ id, type, amount, currency }) => {
    return (
        <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    )
}


