import { useEffect, useState } from 'react'
import { Button, Flex, Box, Text } from '@chakra-ui/react'
import { ProductCard } from './webComponents/ProductCard'
import { Product } from './types/Product';
function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://maia-personalizados.vercel.app/getProducts')
        const data = await response.json()
        
        setProducts(data)
        console.log(products)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
      
    }
    fetchProducts();
  }, []);

  const _products: Product[] = [
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
      {products.map((item) => {
        
        return <ProductCard item={item} />
      })}

    </Flex>
  )
}

export default App
