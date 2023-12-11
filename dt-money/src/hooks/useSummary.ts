import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export function useSummary(){
    
    const {transactions} = useContext(TransactionContext)

const summary = transactions.reduce((acc, transactions ) => {
    if(transactions.type === "income") {
        acc.income += transactions.price
        acc.total += transactions.price
    }
    else {
        acc.outome+= transactions.price
        acc.total -= transactions.price

    }
    return acc
}, {income: 0,outome: 0, total : 0})

return summary
}