import { Product } from "@/types/Product";
import { formatPrice } from "@/utils/commonUtils";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BuyCartButton } from "./BuyCartButton";

export const ProductCard = ({ item }: { item: Product }) => {

  return (
    <Flex
      flexDir={"column"}
      width={"100%"}
      maxWidth={"230px"}

      height="auto" // Altura automática no container principal, ajustada pela imagem
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

              objectFit={"contain"}
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
      <Flex justifyContent={"space-between"} gap={1.5} marginTop="-2px">
        <Flex
          style={{
            boxSizing: "border-box",
            padding: "0px 8px", // Adjust padding for better fit
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
          <Text fontWeight="bold" fontSizeAdjust={"from-font"} color="#000">
            {formatPrice(item.price)}
          </Text>
        </Flex>

        <Box pt={2} paddingInline={0}>
          <BuyCartButton colorScheme="dark" product={item}/>
        </Box>
      </Flex>

    </Flex>
  );
};
