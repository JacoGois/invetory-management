import {
 Stat,
 StatLabel,
 StatNumber,
  StatArrow,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { formatCurrency } from '../../../utils/stringHelpers'
import { cardListVariant, cardItemVariant } from "../../../animations"
import { BsClock } from 'react-icons/bs'

export const ResumeFinancial = () => {
  return (
    <motion.div  
      variants={cardListVariant}
      animate='visible' 
      initial='hidden'
      className='p-3 flex items-center justify-between gap-4 md:gap-8'
    >
        <motion.div variants={cardItemVariant} className='w-full'>
          <Stat className='flex items-center px-3 py-2 border shadow-md bg-surface rounded-lg'>
            <StatLabel><span className='text-md font-bold'>Entradas</span></StatLabel>
            <div className='flex items-center gap-2'>
              <StatArrow className='mt-[2px]' type='increase' />
              <StatNumber>{formatCurrency(1342.67)} </StatNumber>
            </div>
          </Stat>
        </motion.div>
        <motion.div variants={cardItemVariant} className='w-full'>
          <Stat className='flex items-center px-3 py-2 border shadow-md bg-surface rounded-lg'>
            <StatLabel><span className='text-md font-bold'>Saídas</span></StatLabel>
            <div className='flex items-center gap-2'>
              <StatArrow className='mt-[2px]' type='decrease' />
              <StatNumber>{formatCurrency(345.81)} </StatNumber>
            </div>
          </Stat>
        </motion.div>
        <motion.div variants={cardItemVariant} className='w-full'>
          <Stat className='flex items-center px-3 py-2 border shadow-md bg-surface rounded-lg'>
            <StatLabel><span className='text-md font-bold'>Pendente</span></StatLabel>
            <div className='flex items-center gap-2'>
              <BsClock className='text-md mt-[2px]' />
              <StatNumber>{formatCurrency(645.11)} </StatNumber>
            </div>
          </Stat>
        </motion.div>
    </motion.div>
  )
}