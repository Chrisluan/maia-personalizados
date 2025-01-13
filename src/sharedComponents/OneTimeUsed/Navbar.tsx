import { InputGroup } from "@/components/ui/input-group";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputAddon,
  Link
} from '@chakra-ui/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaSearch } from 'react-icons/fa';
import { TbShoppingCart } from "react-icons/tb";
import { FiMenu } from 'react-icons/fi';

import { MenuContent, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import logo from '/logo.svg';
import { useBuyingContext } from "@/Context/BuyingContext";
import { FaCartShopping } from "react-icons/fa6";

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { products } = useBuyingContext();

  return (
    <Flex direction="column" width={"100%"}>
      {/* Top Bar */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="#531FC2"
        p="15px"
        px="3rem"
        width="100%"
      >
        {/* Logo */}
        <Link href="/">
          <Image height="45px" src={logo} alt="Logo" style={{
            
          }} />

        </Link>

        {/* Mobile Menu Icon */}
        {isMobile ? (
          <IconButton
            aria-label="Open menu"
            bg="transparent"
            w="50px"
            h="50px"

          >
            <FiMenu color="white" />
          </IconButton>
        ) : (
          // Desktop Navigation
          <HStack gap={"30px"} color={"white"}>
            <MenuRoot>
              <MenuTrigger asChild>
                <Link>Categorias</Link>
              </MenuTrigger>
              <MenuContent>
                {/* Add menu items here */}
              </MenuContent>
            </MenuRoot>
            <Link>Clientes</Link>
            <Link>Contato</Link>
            <Link>Sobre</Link>
          </HStack>
        )}

        {/* Search and Cart (Desktop Only) */}
        {!isMobile && (
          <Flex width={"30%"} gap={1}>

            <InputGroup width={"100%"} startElement={<FaSearch size={"20px"}></FaSearch>}>
              <Input
                placeholder="Procurar..."
                bg="#E8E3FF"
                borderRadius="20px 0 0 20px"
                color="black"
                aria-label="Procurar"
                width={"100%"}
                border={"none"}
              />

            </InputGroup>
            <InputAddon
              bg="#E8E3FF"
              borderRadius="0 20px 20px 0"
              border={"none"}

            >

              <IconButton bg={"transparent"}>
                {products.length !== 0 && (
                  <Flex
                    style={{
                      background: "purple",
                      height: "15px",
                      width: "15px",
                      borderRadius: "100%",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {products.length}
                  </Flex>
                )}

                <TbShoppingCart size="15px" color="black" />
              </IconButton>

            </InputAddon>
          </Flex>
        )}
      </Flex>

      {/* Search and Cart (Mobile Only) */}
      {isMobile && (
        <Flex width={"100%"} style={{
          padding: "15px",
          backgroundColor: "#531FC2",
          justifyContent: "center"
        }}>
          <Flex width={"90%"} gap={1}>
            <InputGroup width={"100%"} startElement={<FaSearch size={"20px"}></FaSearch>}>
              <Input
                placeholder="Procurar..."
                bg="#E8E3FF"
                borderRadius="20px 0 0 20px"
                color="black"
                aria-label="Procurar"
                width={"100%"}
                border={"none"}
              />

            </InputGroup>

            <InputAddon
              bg="#E8E3FF"
              borderRadius="0 20px 20px 0"
              border={"none"}
            >
              <IconButton bg={"transparent"}>
                {products.length !== 0 && (
                  <Flex
                    style={{
                      background: "purple",
                      height: "15px",
                      width: "15px",
                      borderRadius: "100%",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {products.length}
                  </Flex>
                )}

                <FaCartShopping size="15px" color="black" />
              </IconButton>
            </InputAddon>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
