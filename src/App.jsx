import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
  <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
