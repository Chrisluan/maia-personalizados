import { useAllProductsContext } from '@/Context/AllProductsContext';
import { ProductCard } from '@/sharedComponents/ProductCard';
import { Box, Grid, Text, VStack } from '@chakra-ui/react';
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
        <Box minW={"100%"} mt={"20px"}>
            <VStack style={{
            }}>
                {categories.map((ct, key) => {
                    // Filter products that include the current category in their categories
                    const filteredProducts = products.filter(product =>
                        product.categories?.includes(ct || "")
                    );

                    return (
                        <React.Fragment key={key}>
                            <Text  fontSize={"lg"} fontWeight={"bold"}>{ct}</Text>
                            <Box >
                                <Grid
                                    border={"1px solid"}
                                    templateColumns="repeat(3, 1fr)" gap="6"
                                    padding={3}
                                >
                                    {filteredProducts.map((item, k) => (
                                        <Box key={`${ct}-${k}`}> {/* Ensure a unique key for each category-product combination */}
                                            <ProductCard item={item} />
                                        </Box>
                                    ))}
                                </Grid>
                            </Box>

                        </React.Fragment>
                    );
                })}

            </VStack>
        </Box>
    )
}
