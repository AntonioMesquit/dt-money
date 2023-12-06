import * as Dialog from '@radix-ui/react-dialog'
import { CloseModal, Content, Overlay } from './styles'
import { X } from 'phosphor-react'
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

                <button type='submit'>Cadastrar</button>
            </form>
            <CloseModal>
                <X />
            </CloseModal>
        </Content>
    </Dialog.Portal>
    )
}