import { Table } from '../../components/Table/Table'
import { FilterTable } from '../../components/FilterTable'
import { ModalStudents } from './components'
import { useDisclosure } from '@chakra-ui/react'
import { ButtonAction } from '../../components/Table/ButtonAction'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'

export const Students = () => {
  const data = [
    {
      registration: '001',
      name: 'Fulano de Tal',
      birthDate: '01/01/1990',
      cpf: '123.456.789-00',
      email: 'fulano@example.com',
      phone: '(00) 1234-5678',
      institution: 'Universidade XYZ',
      code: 'uniqueCode1',
    },
    {
      registration: '002',
      name: 'Ciclano da Silva',
      birthDate: '02/02/1985',
      cpf: '987.654.321-00',
      email: 'ciclano@example.com',
      phone: '(00) 8765-4321',
      institution: 'Instituto ABC',
      code: 'uniqueCode2',
    },
    {
      registration: '003',
      name: 'Beltrano Oliveira',
      birthDate: '03/03/1982',
      cpf: '111.222.333-44',
      email: 'beltrano@example.com',
      phone: '(00) 5432-1098',
      institution: 'Escola 123',
      code: 'uniqueCode3',
    },
    {
      registration: '004',
      name: 'Maria Silva',
      birthDate: '04/04/1995',
      cpf: '555.666.777-88',
      email: 'maria@example.com',
      phone: '(00) 9876-5432',
      institution: 'Colégio ABC',
      code: 'uniqueCode4',
    },
    {
      registration: '005',
      name: 'João Santos',
      birthDate: '05/05/1988',
      cpf: '999.888.777-66',
      email: 'joao@example.com',
      phone: '(00) 2345-6789',
      institution: 'Faculdade XYZ',
      code: 'uniqueCode5',
    },
    {
      registration: '006',
      name: 'Ana Oliveira',
      birthDate: '06/06/1992',
      cpf: '777.888.999-00',
      email: 'ana@example.com',
      phone: '(00) 8765-4321',
      institution: 'Escola 456',
      code: 'uniqueCode6',
    },
    {
      registration: '007',
      name: 'Pedro Lima',
      birthDate: '07/07/1980',
      cpf: '222.333.444-55',
      email: 'pedro@example.com',
      phone: '(00) 3456-7890',
      institution: 'Universidade ABC',
      code: 'uniqueCode7',
    },
    {
      registration: '008',
      name: 'Mariana Costa',
      birthDate: '08/08/1993',
      cpf: '444.555.666-77',
      email: 'mariana@example.com',
      phone: '(00) 6543-2109',
      institution: 'Instituto XYZ',
      code: 'uniqueCode8',
    },
    {
      registration: '009',
      name: 'Rafaela Pereira',
      birthDate: '09/09/1987',
      cpf: '666.777.888-99',
      email: 'rafaela@example.com',
      phone: '(00) 7890-1234',
      institution: 'Colégio 789',
      code: 'uniqueCode9',
    },
    {
      registration: '010',
      name: 'Lucas Oliveira',
      birthDate: '10/10/1990',
      cpf: '333.222.111-00',
      email: 'lucas@example.com',
      phone: '(00) 5678-9012',
      institution: 'Escola 789',
      code: 'uniqueCode10',
    },
  ];
  

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [ studentId, setStudentId ] = useState(undefined)


  const handleOpenModalAddStudent = () => {
    setStudentId()
    onOpen()
  }

  const handleOpenModalEditStudent = id => {
    setStudentId(id)
    onOpen()
  }

  return (
    <main>
      <ModalStudents isOpen={isOpen} onClose={onClose} studentId={studentId} />
      <FilterTable 
        handleClickAdd={handleOpenModalAddStudent} 
        placeholderInput='Digite o nome do Aluno...' 
        filters={
          <div>
            oi
          </div>
        }
      />
      <Table.Root>
      <Table.Thead >
        <Table.Th>Matrícula</Table.Th>
        <Table.Th expansiveTh>Nome</Table.Th>
        <Table.Th textAlign='center'>Data Nascimento</Table.Th>
        <Table.Th textAlign='center'>CPF</Table.Th>
        <Table.Th textAlign='center'>E-mail</Table.Th>
        <Table.Th textAlign='center'>Telefone</Table.Th>
        <Table.Th textAlign='center'>Instituição</Table.Th>
        <Table.Th textAlign='center'>Ações</Table.Th>
      </Table.Thead>
      <Table.Tbody colSpan={7} data={data}>
        {data.map((product) => (
          <Table.Tr>
            <Table.Td>{product.registration}</Table.Td>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.birthDate}</Table.Td>
            <Table.Td>{product.cpf}</Table.Td>
            <Table.Td textAlign='center'>{product.email}</Table.Td>
            <Table.Td textAlign='center'>{product.phone}</Table.Td>
            <Table.Td textAlign='center'>{product.institution}</Table.Td>
            <Table.Td 
              textAlign='center' 
              text={
                <ButtonAction
                  icon={<BsFillPencilFill size={14} />}
                  labelTooltip='Editar Produto'
                  onClick={() => handleOpenModalEditStudent(product.code)}
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