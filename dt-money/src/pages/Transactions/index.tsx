import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Sumary } from "../../components/Sumary"
import { SearchForm } from './components/SearchForm'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { dateFromatter, priceFormatter } from "../../utills/formatter"

export function Transactions(){
const {transactions} = useContext(TransactionContext)
    
    
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
                                    
                                {transaction.type === "outome" && '-    '}
                                 {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFromatter.format(new Date(transaction.createdAt))}</td>
    
                        </tr>
                        )
                    })}

                    
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}