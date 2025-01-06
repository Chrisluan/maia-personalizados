import { Box, Image, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { Product } from "@/types/Product";
import { formatPrice } from "@/utils/commonUtils";





export const ProductCard = ({ item }: { item: Product }) => {

  const addToCart = () => {
    console.log(`Added item ${item.name} to cart`);
  }

  
  return (
    <Flex flexDir={"column"} width={"fit-content"}>
      <Box
        w="240px"
        minW={"240px"}
        borderWidth="3px"
        borderColor="#531FC2"
        borderRadius="12px"
        borderBottomLeftRadius={"0"}
        overflow="hidden"
        bg="white"
        boxShadow="md"
      >
        <Box width={"100%"} p={2} maxH={"240px"} minHeight={"240px"} overflow={"hidden"}
        >
          <Image
            src={item.imageLink} // Use a URL ou hospede a imagem
            width="100%"
            objectFit={"cover"}
            alt="Kit Personalizado"
            borderRadius="8px"
            position={"relative"}
            display={"block"}
            margin={"auto"}
          />
        </Box>

        {/* Conteúdo */}
        <Box paddingInline={"4"} pb={"2.5"}>
          <Text
            fontWeight="bold"
            fontSize="md"

            textAlign="left"
            color="#000"
          >
            {item.name}
          </Text>
          <Text textAlign="left"
            color="#000" fontSize={"sm"}>
            {item.description}
          </Text>
        </Box>
      </Box>
      {/*Interagível*/}
      <Flex maxWidth={"100%"} gap={1.5}>
        <Box style={{
          marginTop: "-3px",
          padding: "8px",
          backgroundColor: "white",
          borderRight: "3px solid #531FC2",
          borderLeft: "3px solid #531FC2",
          borderBottom: "3px solid #531FC2",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          flex: "3"
        }}>
          <Text fontWeight="bold" fontSize="1rem" color="#000" textAlign="center">
            {formatPrice(item.price)}
          </Text>
        </Box>


        <Flex mt={"5px"} gap={2} width={"100%"}>
          <Button
            backgroundColor={"#531FC2"}
            color={"white"}
            fontSize={"0.9rem"}
            borderRadius={"8px"}
            fontWeight="semibold"
            
            
          >
            COMPRAR
          </Button>
          <IconButton
            onClick={() => addToCart()}
            width="45px"
            
            borderWidth="3px"
            borderRadius={"8px"}
            borderColor="#531FC2"
          >
            <FaCartPlus />
          </IconButton>
        </Flex>

      </Flex>
    </Flex>

  );
}
