const operatorsEnum = {
  EQUAL: 'eq',
  LIKE: 'like',
  IN: 'in',
  LESS_THAN: 'lt',
  LESS_THAN_EQUAL: 'lte',
  GREATER_THAN: 'gt',
  GREATER_THAN_EQUAL: 'gte',
  BETWEEN: 'btw',
}

export const prepareFilters = options => {
  const filters = { page: options.page ?? 1 }
  for (let option of options) {
    if (!operatorsEnum[option.operator]) throw new Error(`Invalid column name '${option.operator}'`)
    const filterKey =
      option.operator === 'EQUAL' ? `filter[${option.column}]` : `filter[${option.column}][${operatorsEnum[option.operator]}]`
    const filterValue = Array.isArray(option.value) ? option.value.reduce((value, item) => value + ',' + item) : option.value
    filters[filterKey] = filterValue
  }
  return filters
}

export const FilterBuilder = () => {
  const filters = []

  function like(column, value) {
    filters.push({
      operator: 'LIKE',
      column,
      value,
    })
    return this
  }

  function between(column, value) {
    filters.push({
      operator: 'BETWEEN',
      column,
      value,
    })
    return this
  }

  function equal(column, value) {
    filters.push({
      operator: 'EQUAL',
      column,
      value,
    })
    return this
  }

  function In(column, value) {
    filters.push({
      operator: 'IN',
      column,
      value,
    })
    return this
  }

  function lessThan(column, value) {
    filters.push({
      operator: 'LESS_THAN',
      column,
      value,
    })
    return this
  }

  function lessThanEqual(column, value) {
    filters.push({
      operator: 'LESS_THAN_EQUAL',
      column,
      value,
    })
    return this
  }

  function greaterThan(column, value) {
    filters.push({
      operator: 'GREATER_THAN',
      column,
      value,
    })
    return this
  }

  function greaterThanEqual(column, value) {
    filters.push({
      operator: 'GREATER_THAN_EQUAL',
      column,
      value,
    })
    return this
  }

  function build() {
    return prepareFilters(filters)
  }

  return {
    like,
    between,
    equal,
    lessThan,
    lessThanEqual,
    greaterThan,
    greaterThanEqual,
    In,
    build,
  }
}
