import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseTransactionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}