import { useEffect, useState } from 'react'
import { Flex, } from '@chakra-ui/react'
import { ProductCard } from './webComponents/ProductCard'
function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://maia-personalizados.vercel.app/getProducts')
        const data = await response.json()
        setProducts(data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
      
    }
    fetchProducts();
  }, []);

  return (
    <Flex gap={0}>
      { loading ? (<h1>Loading...</h1>) :
      products.map((item, k) => {
        return <ProductCard key={k} item={item} />
      })}

    </Flex>
  )
}

export default App
