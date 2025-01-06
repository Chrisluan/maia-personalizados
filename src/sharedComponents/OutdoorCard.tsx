import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface OutdoorCardProps {
  children?: React.ReactNode;
  priority: number;
}

export const OutdoorCard: React.FC<OutdoorCardProps> = ({ priority, children }) => {
  return (
    <Flex
      position="relative"
      flex={priority}
      justifyContent="center"
      alignItems="center"
      minHeight="20rem"
      width="100%"
    >
      <Box position="absolute" bottom={0} height="100%" minHeight="fit-content">
        {children}
      </Box>
    </Flex>
  );
};