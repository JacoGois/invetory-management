import { opacityVariant } from "../animations"
import { motion } from "framer-motion"
import { Icon } from "./Icon"
import { AiOutlinePlus } from "react-icons/ai"
import { SlMagnifier } from "react-icons/sl"
import { BsArrowClockwise, BsFunnel } from "react-icons/bs"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useState } from "react"
import { Filters } from "./Filters"
import { useDisclosure } from "@chakra-ui/react"

export const FilterTable = ({ 
    handleClickAdd,
    placeholderInput,
    valueInput,
    onChangeInput,
    filters
  }) => {
 const [expanded, setExpanded] = useState(false);
 const { isOpen, onClose, onOpen } = useDisclosure()

 const handleOpenFilters = () => {
  onOpen()
 }

  return (
   <>
    <Filters isOpen={isOpen} onClose={onClose} >
        { filters }
    </Filters>
     <motion.div
       variants={opacityVariant}
       initial='hidden'
       animate='visible'
       className='p-4 bg-surface flex items-center w-full justify-between border-b shadow-md'
     >
       <div className='flex items-center gap-4'>
         <Icon label='Adicionar Produto'>
          <span className='h-8 w-8 border border-green-500 rounded-full bg-green-200/60 flex items-center justify-center' onClick={handleClickAdd}>
            <AiOutlinePlus className='text-green-500' size={16} />
          </span>
          </Icon>
          <div className='flex items-center gap-2'>
            <Icon label='Buscar'>
              <SlMagnifier onClick={() => setExpanded(!expanded)} size={18} />
            </Icon>
            <motion.input 
              initial={{ width: '0px' }}
              animate={{ width: expanded ? '200px' : '0px' }}
              transition={{ duration: 0.5}}
              value={valueInput}
              onChange={onChangeInput}
              style={{
              padding: '5px',
            }}
            placeholder={placeholderInput}
           />
         </div>
         <div className='ml-[-13px]'>
          <Icon onClick={handleOpenFilters} label='Filtros'>
            <BsFunnel size={18} />
          </Icon>
         </div>
         <Icon label='Recarregar'>
           <BsArrowClockwise size={18} />
         </Icon>
       </div>
       <div className='flex items-center gap-4'>
        <p>1 - 200 of 500</p>
        <div className='flex items-center gap-2'>
        <Icon>
           <IoIosArrowBack size={16} className='pt-[2px]' />
         </Icon>
         <span className='text-md'>1</span>
         <Icon>
           <IoIosArrowForward size={16} className='pt-[2px]' />
         </Icon>
        </div>
       </div>
     </motion.div>
   </>
  )
}