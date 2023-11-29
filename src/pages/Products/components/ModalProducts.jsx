import { Button } from '../../../components/Button'
import { TextField } from '../../../components/Fields/TextField'
import { Modal } from '../../../components/Modal/Modal'

export const ModalProducts = ({ isOpen, onClose, productId }) => {
  return (
   <Modal.Root isOpen={isOpen} onClose={onClose} size='4xl'>
     <Modal.Header text={productId ? 'Editar Produto' : 'Adicionar Produto'} />
     <Modal.Body>
       <div>
         <div className='flex flex-col w-full md:flex-row items-center md:gap-3'>
           <TextField label='Nome' className='w-full' placeholder='Ex.: Bisturi' />
           <TextField label='Código' className='w-full' placeholder='Ex.: 0123456789012' />
         </div>
         <div className='flex flex-col w-full md:flex-row items-center md:gap-3'>
           <TextField label='Estoque' className='w-full' placeholder='Ex.: 20' />
           <TextField label='Responsável' className='w-full' placeholder='Ex.: Ricardo' />
         </div>
         <div className='my-2 flex justify-end'>
           <Button text='Salvar'  />
         </div>
       </div>
     </Modal.Body>
   </Modal.Root>
  )
}