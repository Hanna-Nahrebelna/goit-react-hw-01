export default function TransactionHistoryItems({ transaction: {type, amount, currency } }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>currency</th>            
          </tr>
        </thead>

      <tbody>
          <tr>{type}</tr>
          <tr>{amount}</tr>
          <tr>{currency}</tr>
        </tbody>
      </table>
    </div>
  )
}
