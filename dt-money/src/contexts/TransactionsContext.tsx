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
  fetchTransactions: (query?: string) => Promise<void>
}
interface TransactionProviderProps {
    children: ReactNode
}
export const TransactionContext = createContext({} as TransactionContextType)




export function TransactionProvider({children} : TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function fetchTransactions(query?: string){ // mama na piroka 
        const url = new URL('http://localhost:3000/transactions')
        if(query){
            url.searchParams.append('q', query)
        }
        
        const response = await fetch(url)
        const data = await response.json();
        setTransactions(data)
    }
    useEffect(() => {
    fetchTransactions()
} , [])

    return(
        <TransactionContext.Provider value={{transactions , fetchTransactions }}>
        {children}
        </TransactionContext.Provider>
    )
}