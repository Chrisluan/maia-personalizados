import { Flex, GridItem, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Carrosel } from './sharedComponents/Carrosel';
import { Navbar } from './sharedComponents/Navbar';
import { Outdoor } from './sharedComponents/Outdoor';
import { OutdoorCard } from './sharedComponents/OutdoorCard';
import { ProductCard } from './sharedComponents/ProductCard';
import { PromotionBanner } from './sharedComponents/PromotionBanner';
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://maia-personalizados-api.vercel.app/getProducts');
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Outdoor>
        <OutdoorCard priority={1.5}>
          <Carrosel></Carrosel>
        </OutdoorCard>
        <OutdoorCard priority={1}>
        <PromotionBanner product={loading ? null: products[6]}></PromotionBanner>
        </OutdoorCard>
      </Outdoor>
      <SimpleGrid
        gap={5}
        columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
        padding={5}
      >
        {loading ? (
          <Flex justify="center" align="center" width="100%">
            <Spinner size="xl" />
          </Flex>
        ) : (
          products.map((item, k) => (
            <GridItem key={k}><ProductCard item={item} /></GridItem>
          ))
        )}
      </SimpleGrid>
    </>
  );
}

export default App;
