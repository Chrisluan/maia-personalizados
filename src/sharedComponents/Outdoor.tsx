import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface OutdoorProps {
  children?: ReactNode; // Defina o tipo de children explicitamente
}

export const Outdoor: React.FC<OutdoorProps> = ({ children }) => {
  return (
    <Flex flexDir={{base:"column", md:"row"}} maxWidth={"100dvw"} gap={2} height={"auto"} minHeight={"100%"}overflow={"hidden"}>
      {children}
    </Flex>
  );
}