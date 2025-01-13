import { Product } from '@/types/Product';
import { formatPrice } from '@/utils/commonUtils';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import loadinggif from '/loading.gif';
import { keyframes } from '@emotion/react';
import { BuyCartButton } from '../BuyCartButton';
interface PromotionBannerProps {
    product?: Product;
}

export const PromotionBanner = (props: PromotionBannerProps) => {
    const { product } = props;

    const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
    return (
        <Flex style={{
            position: "relative",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {product != undefined ? (
                <Flex width={"100%"} height={"100%"} justifyContent={"center"} animation={`${fadeIn} 1s forwards;`} animationIterationCount={"1"}>
                    <Image src={product?.imageLink} />
                    <Flex position={"absolute"} style={{
                        bottom: 0,
                        width: "100%",
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(83,31,194,1) 76%)",
                        height: "35%",
                        alignItems: "center",
                    }}>
                        <Flex style={{
                            width: "100%",
                            padding: "40px",
                            gap: "10px",
                            justifyContent: "space-between",
                        }}>
                            <Text>
                                {product?.description}
                            </Text>
                            <Box>
                                <Text>
                                    {formatPrice(product?.price)}
                                </Text>
                                <BuyCartButton colorScheme='light' product={product}/>
                            </Box>

                        </Flex>


                    </Flex>
                </Flex>


            ) : (
                <Image src={loadinggif} width={"30%"}>

                </Image>
            )}


        </Flex>
    )
}
