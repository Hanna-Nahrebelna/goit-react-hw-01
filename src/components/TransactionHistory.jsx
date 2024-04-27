import TransactionHistoryItems from "./TransactionHistoryItems";

export default function TransactionHistory({ transactions }) {
  return (
    <div>      
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionHistoryItems transaction={transaction} />
          </tr>        
        ))}   
      </tbody>
    </div>
  )
}
