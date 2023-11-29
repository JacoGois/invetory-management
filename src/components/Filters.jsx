import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { TextField } from "./Fields/TextField"
import { Toggle } from "./Toggle"

export const Filters = ({ isOpen, onClose, children }) => {
  return (
   <Drawer
     isOpen={isOpen}
     placement='right'
     onClose={onClose}
   >
     <DrawerOverlay />
     <DrawerContent>
       <DrawerCloseButton />
       <DrawerHeader>Filtros</DrawerHeader>

       <DrawerBody>
         {children}
       </DrawerBody>
       <DrawerFooter>
         <Button variant='outline' className='w-full' mr={3} onClick={onClose}>
           Cancelar
         </Button>
         <Button colorScheme='blue' className='w-full'>Aplicar</Button>
       </DrawerFooter>
     </DrawerContent>
   </Drawer>
  )
}