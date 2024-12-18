import React from "react";
import { ChakraProvider, Box, Image, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { Product } from "@/types/Product";

export const ProductCard = ({ item }: { item: Product }) => {

  const addToCart = () => {
    console.log(`Added item ${item.name} to cart`);
  }
  return (
    <Flex flexDir={"column"} width={"fit-content"}>
      <Box
        w="280px"
        minW={"280px"}
        borderWidth="3px"
        borderColor="#531FC2"
        borderRadius="15px"
        borderBottomLeftRadius={"0"}
        overflow="hidden"
        bg="white"
        boxShadow="md"
      >
        <Box width={"100%"} p={2.5} maxH={"280px"} minHeight={"280px"} overflow={"hidden"}
        >
          <Image
            src="https://picsum.photos/1080/1080" // Use a URL ou hospede a imagem
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
        <Box paddingInline={"5"} pb={"3"}>
          <Text
            fontWeight="bold"
            fontSize="lg"

            textAlign="left"
            color="#000"
          >
            {item.name}
          </Text>
        </Box>
      </Box>
      {/*Interagível*/}
      <Flex maxWidth={"100%"} gap={1.5}>
        <Box style={{
          marginTop: "-3px",
          padding: "10px",
          backgroundColor: "white",
          borderRight: "3px solid #531FC2",
          borderLeft: "3px solid #531FC2",
          borderBottom: "3px solid #531FC2",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          flex: "3"
        }}>
          <Text fontWeight="bold" fontSize="1.2rem" color="#000" textAlign="center">
            R$ {item.price}
          </Text>
        </Box>


        <Flex mt={"5px"} gap={2}>
          <Button
            backgroundColor={"#531FC2"}
            color={"white"}
            fontSize={"1rem"}
            borderRadius={"9px"}
            fontWeight="semibold"
            flex="3"
            height={"100%"}
          >
            COMPRAR
          </Button>
          <IconButton
            onClick={() => addToCart()}
            width="50px"
            height={"100%"}
            borderWidth="3px"
            borderRadius={"9px"}
            borderColor="#531FC2"
          >
            <FaCartPlus />
          </IconButton>
        </Flex>

      </Flex>
    </Flex>

  );
}

