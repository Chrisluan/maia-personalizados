import { Product } from "@/types/Product";
import { formatPrice } from "@/utils/commonUtils";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BuyCartButton } from "./BuyCartButton";

export const ProductCard = ({ item }: { item: Product }) => {

  return (
    <Flex
      flexDir={"column"}
      width={"220px"}
      maxHeight={"100%"}
    >
      <Link href={`/produto/${item._id}`} _active={{
        bg: "gray.100",
      }}>
        <Box

          width={"100%"}
          borderWidth="2px"
          borderColor="#531FC2"
          borderRadius="10px"
          borderBottomLeftRadius={"0"}
          bg="white"
          height="300px" // Altura fixa
          display="flex"

          flexDirection="column"
        >
          <Box
            p={1.5}
            overflow="hidden" // Esconde o conteúdo extra se houver
            display="flex"


          >
            <Image
              src={item.imageLink}
              width="100%"
              objectFit={"cover"}
              alt={item.name + " | " + item.description}
              borderRadius="6px"
              position={"relative"}

            />
          </Box>

          {/* Conteúdo */}
          <Text
            fontWeight="500"
            padding='4px'
            textAlign="left"
            color="#000"
            maxWidth={"90ch"}
            wordBreak={"break-word"}
            textWrap={"pretty"}
            paddingInline={"3"} flex="1"

          >
            {item.name}
          </Text>
        </Box>
      </Link>

      {/* Interagível */}
      <Flex justifyContent={"space-between"} marginTop="-2px">
        <Flex
          style={{
            width:"100%",
            padding: "0px 4px", // Adjust padding for better fit
            backgroundColor: "white",
            borderRight: "2px solid #531FC2",
            borderLeft: "2px solid #531FC2",
            borderBottom: "2px solid #531FC2",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text fontWeight="bold" color="#000">
            {formatPrice(item.price)}
          </Text>
        </Flex>

        <Box mt={"5px"} paddingLeft={"5px"}>
          <BuyCartButton colorScheme="light" product={item}/>
        </Box>
      </Flex>

    </Flex>
  );
};
