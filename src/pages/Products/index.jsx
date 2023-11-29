import { Table } from '../../components/Table/Table'
import { FilterTable } from '../../components/FilterTable'
import { ModalProducts } from './components'
import { useDisclosure } from '@chakra-ui/react'
import { ButtonAction } from '../../components/Table/ButtonAction'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'
import { TextField } from '../../components/Fields/TextField'
import { Toggle } from '../../components/Toggle'

export const Products = () => {
  const data = [
  {
    name: "Seringa Anestésica",
    stock: 50,
    available: 10,
    responsible: 'Dr. Antônio',
    code: "1234567890123",
  },
  {
    name: "Fio de Sutura",
    stock: 30,
    available: 5,
    responsible: 'Dr. Antônio',
    code: "2345678901234",
  },
  {
    name: "Broca Cirúrgica",
    stock: 40,
    available: 8,
    responsible: 'Dr. Antônio',
    code: "3456789012345",
  },
  {
    name: "Cânula de Sucção",
    stock: 25,
    available: 3,
    responsible: 'Dr. Antônio',
    code: "4567890123456",
  },
  {
    name: "Cimento Ósseo",
    stock: 20,
    available: 4,
    responsible: 'Dr. Antônio',
    code: "5678901234567",
  },
  {
    name: "Kit Cirúrgico Descartável",
    stock: 60,
    available: 15,
    responsible: 'Dr. Antônio',
    code: "6789012345678",
  },
  {
    name: "Lâmina de Bisturi",
    stock: 35,
    available: 6,
    responsible: 'Dr. Antônio',
    code: "7890123456789",
  },
  {
    name: "Pinça Hemostática",
    stock: 28,
    available: 2,
    responsible: 'Dr. Antônio',
    code: "8901234567890",
  },
  {
    name: "Placa de Titânio",
    stock: 15,
    available: 1,
    responsible: 'Dr. Antônio',
    code: "9012345678901",
  },
  {
    name: "Sugador Cirúrgico",
    stock: 42,
    available: 7,
    responsible: 'Dr. Antônio',
    code: "0123456789012",
  },
  {
    name: "Implante Dentário",
    stock: 18,
    available: 0,
    responsible: 'Dr. Antônio',
    code: "1234567890123",
  },
  {
    name: "Agulha Hipodérmica",
    stock: 48,
    available: 12,
    responsible: 'Dr. Antônio',
    code: "2345678901234",
  },
  {
    name: "Algodão Cirúrgico",
    stock: 55,
    available: 9,
    responsible: 'Dr. Antônio',
    code: "3456789012345",
  },
  {
    name: "Contra-Ângulo",
    stock: 22,
    available: 5,
    responsible: 'Dr. Antônio',
    code: "4567890123456",
  },
  {
    name: "Espelho Odontológico",
    stock: 32,
    available: 10,
    responsible: 'Dr. Antônio',
    code: "5678901234567",
  },
]

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [ productId, setProductId ] = useState(undefined)


  const handleOpenModalAddProduct = () => {
    setProductId()
    onOpen()
  }

  const handleOpenModalEditProduct = id => {
    setProductId(id)
    onOpen()
  }

  return (
    <main>
      <ModalProducts isOpen={isOpen} onClose={onClose} productId={productId} />
      <FilterTable 
        handleClickAdd={handleOpenModalAddProduct} 
        placeholderInput='Digite o nome do Produto...' 
        filters={
          <div>
            <TextField label='Responsável' placeholder='Ex.: João' />
            <TextField label='Código'  placeholder='Ex.: 0123456789012' />
            <div className="px-3 py-2.5 mt-3 rounded-md flex justify-between items-center border">
              <p>Disponível</p>
              <Toggle />
            </div>
          </div>
        }
      />
      <Table.Root>
      <Table.Thead >
        <Table.Th expansiveTh>Nome</Table.Th>
        <Table.Th>Responsável</Table.Th>
        <Table.Th textAlign='center'>Estoque</Table.Th>
        <Table.Th textAlign='center'>Disponível</Table.Th>
        <Table.Th textAlign='center'>Código</Table.Th>
        <Table.Th textAlign='center'>Ações</Table.Th>
      </Table.Thead>
      <Table.Tbody colSpan={6}  data={data}>
        {data.map((product) => (
          <Table.Tr>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.responsible}</Table.Td>
            <Table.Td textAlign='center'>{product.stock}</Table.Td>
            <Table.Td textAlign='center'>{product.available}</Table.Td>
            <Table.Td textAlign='center'>{product.code}</Table.Td>
            <Table.Td 
              textAlign='center' 
              text={
                <ButtonAction
                  icon={<BsFillPencilFill size={14} />}
                  labelTooltip='Editar Produto'
                  onClick={() => handleOpenModalEditProduct(product.code)}
                />
              }
            />
        </Table.Tr>
        ))}
      </Table.Tbody>
      </Table.Root>
    </main>
  )
}