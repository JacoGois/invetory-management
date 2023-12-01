import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import { showItemAnimation } from '../animations'
import { animationClick } from '../../../animations'
export const LogoSidebar = ({ isOpen }) => {
  const navigate = useNavigate()
  return (
    <motion.div 
      variants={animationClick}
      whileHover={isOpen ? {
        scale: 1.05,
        transition: { duration: 0.5 },
      } : 
      {
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={'click'}
      className='flex gap-2 flex-col overflow-hidden min-h-max'
      onClick={() => navigate('/')}
    >
      <div className='flex whitespace-pre items-center gap-1 font-semibold text-base cursor-pointer'>
        <img src='https://img.freepik.com/icones-gratis/dente_318-776809.jpg' width={50} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showItemAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-blue-200 ml-2"
            >
              Software
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}