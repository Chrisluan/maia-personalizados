import { useState } from 'react'
import { Button, Flex, Box, Text } from '@chakra-ui/react'
import { ProductCard } from './webComponents/ProductCard'
import { Product } from './types/Product';
import main from '../src/backend/dataConnection'
function App() {
  const products: Product[] = [
    {
      name: "Kit Personalizado Luxo 15 anos Casamento Bodas",
      price: 20.00,
      description: "A luxurious kit for special occasions like weddings and anniversaries.",
      imageLink: "https://picsum.photos/1080/1080", // Replace with your image link
      categories: ["Wedding", "Anniversary", "Luxury"]
    },
    {
      name: "Kit Personalizado Luxo 15 anos Casamento Bodas",
      price: 35.00,
      description: "A luxurious kit for special occasions like weddings and anniversaries.",
      imageLink: "https://picsum.photos/1080/1080", // Replace with your image link
      categories: ["Wedding", "Anniversary", "Luxury"]
    },
    {
      name: "Kit Personalizado Luxo 15 anos Casamento Bodas",
      price: 20.00,
      description: "A luxurious kit for special occasions like weddings and anniversaries.",
      imageLink: "https://picsum.photos/1080/1080", // Replace with your image link
      categories: ["Wedding", "Anniversary", "Luxury"]
    },
  ]

  return (
    <Flex gap={0}>
      {products.map((item)=>{
        return <ProductCard item={item} />
      })}
      
    </Flex>
  )
}

export default App
