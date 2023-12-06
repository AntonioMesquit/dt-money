import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Sumary } from "../../components/Sumary"
import { SearchForm } from './components/SearchForm'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"
interface Transaction {
    id : number,
    description: string,
    type: 'income' | 'outome',
    price: number,
    category: string,
    createdAt: string,
    
}
export function Transactions(){

    
    const [transactions, setTransactions] = useState<Transaction[]>([])
useEffect(() => {

    async function loadingTransactions(){
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();
        setTransactions(data)
    }
    loadingTransactions()
} , [])

    return(
        <div>
            <Header />
            <Sumary />
            <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
            
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                            <td width="50%" >{transaction.description}</td>
                            <td> 
                                <PriceHighlight variant={transaction.type}>
                                 {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
    
                        </tr>
                        )
                    })}

                    
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}