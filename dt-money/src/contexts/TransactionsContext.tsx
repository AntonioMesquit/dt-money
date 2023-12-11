import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id : number,
    description: string,
    type: 'income' | 'outome',
    price: number,
    category: string,
    createdAt: string,
    
}

interface TransactionContextType {
  transactions: Transaction[]
}
interface TransactionProviderProps {
    children: ReactNode
}
export const TransactionContext = createContext({} as TransactionContextType)




export function TransactionProvider({children} : TransactionProviderProps){
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
        <TransactionContext.Provider value={{transactions}}>
        {children}
        </TransactionContext.Provider>
    )
}