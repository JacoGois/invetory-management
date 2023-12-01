import { Table } from '../../components/Table/Table'
import { FilterTable } from '../../components/FilterTable'
import { Graphics, ModalFinancial, ResumeFinancial } from './components'
import { useDisclosure, Tag } from '@chakra-ui/react'
import { useState } from 'react'
import { formatCurrency } from '../../utils/stringHelpers'

export const Financial = () => {
  const dataFinancial = [
    { number: 1, description: 'Consulta', value: 150, type: 'Receita' },
    { number: 2, description: 'Limpeza', value: 80, type: 'Receita' },
    { number: 3, description: 'Extração', value: 200, type: 'Despesa' },
    { number: 4, description: 'Ortodontia', value: 300, type: 'Despesa' },
    { number: 5, description: 'Implante', value: 500, type: 'Despesa' },
    { number: 6, description: 'Clareamento', value: 120, type: 'Receita' },
    { number: 7, description: 'Radiografia', value: 50, type: 'Despesa' },
    { number: 8, description: 'Restauração', value: 100, type: 'Despesa' },
    { number: 9, description: 'Profilaxia', value: 70, type: 'Receita' },
    { number: 10, description: 'Canal', value: 250, type: 'Despesa' },
    { number: 11, description: 'Check-up', value: 120, type: 'Receita' },
    { number: 12, description: 'Moldagem', value: 80, type: 'Despesa' },
    { number: 13, description: 'Odontopediatria', value: 180, type: 'Receita' },
    { number: 14, description: 'Ortopedia Facial', value: 350, type: 'Despesa' },
    { number: 15, description: 'Prótese Dentária', value: 400, type: 'Despesa' },
    { number: 16, description: 'Periodontia', value: 160, type: 'Receita' },
    { number: 17, description: 'Odontogeriatria', value: 220, type: 'Receita' },
    { number: 18, description: 'Estomatologia', value: 180, type: 'Receita' },
    { number: 19, description: 'Radiologia', value: 60, type: 'Despesa' },
    { number: 20, description: 'Cirurgia Bucomaxilofacial', value: 500, type: 'Despesa' },
  ]
  

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [ dataId, setDataId ] = useState(undefined)


  const handleOpenModalAddData = () => {
    setDataId()
    onOpen()
  }

  const handleOpenModalEditData = id => {
    setDataId(id)
    onOpen()
  }

  return (
    <main>
      <ModalFinancial isOpen={isOpen} onClose={onClose} dataId={dataId} />
      <ResumeFinancial />
      <FilterTable
        borderB={false} 
        handleClickAdd={handleOpenModalAddData} 
        placeholderInput='Digite o número...' 
        filters={
          <div>
            oi
          </div>
        }
      />
      <Graphics />
      <Table.Root>
      <Table.Thead >
        <Table.Th>Número</Table.Th>
        <Table.Th expansiveTh>Descrição</Table.Th>
        <Table.Th textAlign='right'>Valor</Table.Th>
        <Table.Th textAlign='center'>Tipo</Table.Th>
      </Table.Thead>
      <Table.Tbody colSpan={7} data={dataFinancial}>
        {dataFinancial.map((data) => (
          <Table.Tr>
            <Table.Td>{data.number}</Table.Td>
            <Table.Td>{data.description}</Table.Td>
            <Table.Td textAlign='right'>{formatCurrency(data.value)}</Table.Td>
            <Table.Td textAlign='center'>
              <Tag colorScheme={data.type === "Despesa" ? "red" : 'green'}>{data.type}</Tag>
            </Table.Td>
        </Table.Tr>
        ))}
      </Table.Tbody>
      </Table.Root>
    </main>
  )
}