import * as Dialog from '@radix-ui/react-dialog'
import { CloseModal, Content, Overlay, TransacitionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
export function NewTransactionModal(){
    return(
        <Dialog.Portal>
        <Overlay />
        <Content>
            <Dialog.Title>Nova transacao</Dialog.Title>
            <form action="">
                <input type="text" placeholder='Descrição ' required />
                <input type="number" placeholder='Preço ' required />
                <input type="text" placeholder='Categoria ' required />
                <TransacitionType>
                <TransactionTypeButton variant='income' value='income'>
                        <ArrowCircleUp size={24}  />
                        Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant='outome' value='outome'>
                        <ArrowCircleDown size={24}  />
                        Saida
                    </TransactionTypeButton>

                </TransacitionType>

                <button type='submit'>Cadastrar</button>
            </form>
            <CloseModal>
                <X />
            </CloseModal>
        </Content>
    </Dialog.Portal>
    )
}