import { Product } from '@/types/Product';
import { Flex, Button, Image } from '@chakra-ui/react'
import React from 'react'

interface PromotionBannerProps {
    product?:Product;
}

export const PromotionBanner = (props:PromotionBannerProps) => {
    const { product } = props;
  return (
    <Flex>
        <Flex>
            <Button>
                Comprar
            </Button>
        </Flex>
        <Image objectFit={"cover"} width={"100%"} src={product?.imageLink}/>
        
    </Flex>
  )
}
