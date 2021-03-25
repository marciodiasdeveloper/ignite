import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';

import { 
    Container,
    Content,
} from './styles';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    
    function handleCloseTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenTransactionModal}>
                    Nova transação
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOpen} 
                    onRequestClose={handleCloseTransactionModal}
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}