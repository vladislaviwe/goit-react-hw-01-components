import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Currency</TableHead>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <Transaction
                            key={id}
                            id={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    )
                })}
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}