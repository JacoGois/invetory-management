import { Table } from '../../components/Table/Table'
import { FilterTable } from '../../components/FilterTable'
import { ModalLaboratory } from './components'
import { useDisclosure } from '@chakra-ui/react'
import { ButtonAction } from '../../components/Table/ButtonAction'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'

export const Laboratory = () => {
  const data = [
    {
      name: "Laboratório Tal",
      address: "Rua tal, número tal"
    },
    {
      name: "Laboratório Tal",
      address: "Rua tal, número tal"
    },
  ]

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [ laboratoryId, setLaboratoryId ] = useState(undefined)


  const handleOpenModalAddLaboratory = () => {
    setLaboratoryId()
    onOpen()
  }

  const handleOpenModalEditLaboratory = id => {
    setLaboratoryId(id)
    onOpen()
  }

  return (
    <main>
      <ModalLaboratory isOpen={isOpen} onClose={onClose} laboratoryId={laboratoryId} />
      <FilterTable 
        handleClickAdd={handleOpenModalAddLaboratory} 
        placeholderInput='Digite o nome do Laboratorio...' 
        filters={
          <div>
            oi
          </div>
        }
      />
      <Table.Root>
      <Table.Thead >
        <Table.Th expansiveTh>Nome</Table.Th>
        <Table.Th>Endereço</Table.Th>
        <Table.Th textAlign='center' >Ações</Table.Th>
      </Table.Thead>
      <Table.Tbody colSpan={6}  data={data}>
        {data.map((laboratory) => (
          <Table.Tr>
            <Table.Td>{laboratory.name}</Table.Td>
            <Table.Td>{laboratory.address}</Table.Td>
            <Table.Td 
              textAlign='center' 
              text={
                <ButtonAction
                  icon={<BsFillPencilFill size={14} />}
                  labelTooltip='Editar Produto'
                  onClick={() => handleOpenModalEditLaboratory(laboratory.code)}
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