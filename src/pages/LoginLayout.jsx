import { Box } from '@chakra-ui/react'
import React from 'react'

export const LoginLayout = ({ children }) => {
  return (
    <Box w='100%' display='Box' flexDirection='column' minHeight='100vh' className='bg-background text-text'>
      {children}
    </Box>
  )
}
