import * as Dialog from '@radix-ui/react-dialog'
import { CloseModal, Content, Overlay, TransacitionType, TransactionTypeButton } from './styles'
import * as z from 'zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionsFormSchemas = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
     type: z.enum(['income' , 'outome'])
})
type newTransactionsFormInputs = z.infer<typeof newTransactionsFormSchemas>
export function NewTransactionModal() {
    const { register, handleSubmit, control } = useForm<newTransactionsFormInputs>({
        resolver: zodResolver(newTransactionsFormSchemas),
        defaultValues: {
            type: 'income'
        }
    })
    function handleCreateNewTransaction(data: newTransactionsFormInputs) {
        console.log(data)

    }
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transacao</Dialog.Title>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text"
                        placeholder='Descrição '
                        required
                        {...register('description')}
                    />
                    <input type="number"
                        placeholder='Preço '
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input type="text"
                        placeholder='Categoria '
                        required
                        {...register('category')}
                    />
                    <Controller control={control} name='type' render={({field}) => {
                        console.log(field)
                        return (
                            <TransacitionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant='income' value='income'>
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton variant='outome' value='outome'>
                                    <ArrowCircleDown size={24} />
                                    Saida
                                </TransactionTypeButton>

                            </TransacitionType>

                        )
                    }}>
                    </Controller>
                    <button type='submit'>Cadastrar</button>
                </form>
                <CloseModal>
                    <X />
                </CloseModal>
            </Content>
        </Dialog.Portal>
    )
}