import { Modal } from '../../../components/Modal/Modal'

export const ModalDemanded = ({ isOpen, onClose, productId }) => {
  return (
   <Modal.Root isOpen={isOpen} onClose={onClose} size='4xl'>
     <Modal.Header text={productId ? 'Editar Produto' : 'Adicionar Produto'} />
     <Modal.Body>
       <div>
         oi
       </div>
     </Modal.Body>
   </Modal.Root>
  )
}