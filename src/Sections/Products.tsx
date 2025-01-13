import { HStack } from '@chakra-ui/react'
import React from 'react'
import { ProductShelf } from '../sharedComponents/OneTimeUsed/sections/Products/ProductShelf'
import { FilterBar } from '../sharedComponents/OneTimeUsed/sections/Products/FilterBar'

export const Products = () => {
  return (
    <HStack>
      <FilterBar></FilterBar>
      <ProductShelf></ProductShelf>
    </HStack>
  )
}
