import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
