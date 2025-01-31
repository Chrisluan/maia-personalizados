import { Flex } from '@chakra-ui/react'
import { FilterBar } from '../sharedComponents/OneTimeUsed/sections/Products/FilterBar'
import { ProductShelf } from '../sharedComponents/OneTimeUsed/sections/Products/ProductShelf'

export const Products = () => {
  return (
    <Flex height={"100%"}>
      <FilterBar></FilterBar>
      <ProductShelf></ProductShelf>
    </Flex>
  )
}
