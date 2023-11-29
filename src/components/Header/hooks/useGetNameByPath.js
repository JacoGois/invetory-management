export const useGetNameByPath = (path) => {
  switch (path) {
    case 'products':
      return 'Produtos'
    case 'financial':
      return 'Financeiro'
    case 'students':
      return 'Alunos'
  }
}