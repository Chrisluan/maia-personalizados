import { useAllProductsContext } from '@/Context/AllProductsContext';
import { ProductCard } from '@/sharedComponents/ProductCard';
import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
export const ProductShelf = () => {

    const { products } = useAllProductsContext();
    const [categories, setCategories] = useState<(string | undefined)[]>([]);


    useEffect(() => {

        const allCategories = products
            .flatMap((product) => product.categories) // Combina todas as categorias em um único array
            .filter((category, index, self) => self.indexOf(category) === index); // Remove duplicatas

        setCategories(allCategories);
    }, [products])


    return (
        <Box width="100%" position={"relative"} mt={"20px"}>
            <VStack style={{
                height:"100%"
            }}>
                {categories.map((ct, key) => {
                    // Filter products that include the current category in their categories
                    const filteredProducts = products.filter(product =>
                        product.categories?.includes(ct || "")
                    );

                    return (
                        <Box width={"100%"} key={key}>
                            <Text fontSize={"lg"} fontWeight={"bold"}>{ct}</Text>
                            <Box >
                                <Grid
                                    
                                    border={"1px solid"}
                                    templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gap="6"
                                    padding={3}
                                >
                                    {filteredProducts.map((item, k) => (
                                        <Flex key={`${ct}-${k}`} justifyContent={"center"}> {/* Ensure a unique key for each category-product combination */}
                                            <ProductCard item={item} />
                                        </Flex>
                                    ))}
                                </Grid>
                            </Box>

                        </Box>
                    );
                })}

            </VStack>
        </Box>
    )
}
