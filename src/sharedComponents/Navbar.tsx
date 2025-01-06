import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  IconButton,
  Input,
  Group,
  InputAddon,
} from '@chakra-ui/react';
import { InputGroup } from "@/components/ui/input-group"
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '/logo.svg';
import { MenuContent, MenuRoot, MenuTrigger } from '@/components/ui/menu';

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

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
        <Image height="45px" src={logo} alt="Logo" />

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
          <HStack gap={"30px"}>
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

            <InputGroup width={"100%"}>
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
              <FaCartShopping size="15px" color="black" />
            </InputAddon>
          </Flex>
        )}
      </Flex>

      {/* Search and Cart (Mobile Only) */}
      {isMobile && (
        <Flex width={"100%"} style={{
          padding: "15px",
          backgroundColor: "#531FC2",
          justifyContent:"center"
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
              <FaCartShopping size="15px" color="black" />
            </InputAddon>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};