import { HStack } from '@chakra-ui/react'
import { FilterBar } from '../sharedComponents/OneTimeUsed/sections/Products/FilterBar'
import { ProductShelf } from '../sharedComponents/OneTimeUsed/sections/Products/ProductShelf'

export const Products = () => {
  return (
    <HStack>
      <FilterBar></FilterBar>
      <ProductShelf></ProductShelf>
    </HStack>
  )
}
