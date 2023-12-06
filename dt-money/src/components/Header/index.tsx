import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/Ignite simbol.svg'
import { NewTransactionModal } from "../NewTransactionModal";
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                 <img src={logoImg} alt="" />
                 <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transacao</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                 </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}