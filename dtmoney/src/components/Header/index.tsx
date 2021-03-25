import { useState } from 'react';
import logoImg from '../../assets/logo.svg';

import { 
    Container,
    Content,
} from './styles';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenTransactionModal() {

    }

    function handleCloseTransactionModal() {

    }
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}