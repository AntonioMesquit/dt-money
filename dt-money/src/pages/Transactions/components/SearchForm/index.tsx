import { MagnifyingGlass } from 'phosphor-react'
import {SearchFormContainer} from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
    const {register,
         handleSubmit,
         formState: {isSubmitting}
        } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SearchFormInputs){
        
        console.log(data)

    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
<input type="text"  
placeholder='Busque por Transacoes'
{...register('query')}
/>


            <button type='submit' disabled={isSubmitting}>

                <MagnifyingGlass size={20}/>
                Buscar</button>
        </SearchFormContainer>
    )
}