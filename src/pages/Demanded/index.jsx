import { Table } from '../../components/Table/Table'
import { FilterTable } from '../../components/FilterTable'
import { ModalDemanded } from './components'
import { useDisclosure } from '@chakra-ui/react'
import { ButtonAction } from '../../components/Table/ButtonAction'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'

export const Demanded = () => {
  const data = [
    {
      number: "20233012222700",
      description: "Bisturi Cirurgico para ..."
    },
    {
      number: "20233012222701",
      description: "Manta de Isolamento dental para ..."
    },
  ]

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [ demandedId, setDemandedId ] = useState(undefined)


  const handleOpenModalAddDemanded = () => {
    setDemandedId()
    onOpen()
  }

  const handleOpenModalEditDemanded = id => {
    setDemandedId(id)
    onOpen()
  }

  return (
    <main>
      <ModalDemanded isOpen={isOpen} onClose={onClose} demandedId={demandedId} />
      <FilterTable 
        handleClickAdd={handleOpenModalAddDemanded} 
        placeholderInput='Digite o número do Pedido...' 
        filters={
          <div>
            oi
          </div>
        }
      />
      <Table.Root>
      <Table.Thead >
        <Table.Th>Número</Table.Th>
        <Table.Th expansiveTh>Descrição</Table.Th>
        <Table.Th textAlign='center' >Ações</Table.Th>
      </Table.Thead>
      <Table.Tbody colSpan={6}  data={data}>
        {data.map((demanded) => (
          <Table.Tr>
            <Table.Td>{demanded.number}</Table.Td>
            <Table.Td>{demanded.description}</Table.Td>
            <Table.Td 
              textAlign='center' 
              text={
                <ButtonAction
                  icon={<BsFillPencilFill size={14} />}
                  labelTooltip='Editar Pedido'
                  onClick={() => handleOpenModalEditDemanded(demanded.code)}
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