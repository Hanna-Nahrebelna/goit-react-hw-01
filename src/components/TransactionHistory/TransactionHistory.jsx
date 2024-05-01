import css from "./TransactionHistory.module.css"

export default function TransactionHistory({
  transactions
}) {  
  return (    
    <table>
      <thead>
        <tr className={css.tableTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>            
        </tr>
      </thead>

      <tbody>
      {transactions.map(({ id, type, amount, currency }) => 
        <tr className={css.tableBody} key={id}>
          <td className={css.tableType}>{type}</td>          
          <td className={css.tableAmout}>{amount}</td>         
          <td className={css.tableCurrency}>{currency}</td>
        </tr>        
        )}                   
        </tbody>
      </table>
  )
}
