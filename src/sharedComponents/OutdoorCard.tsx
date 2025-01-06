import { Product } from '@/types/Product';
import { Flex, Image, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';


interface OutdoorCardProps {
    children?: React.ReactNode;
    priority:number;
}   

export const OutdoorCard: React.FC<OutdoorCardProps> = ({priority, children }) => {

    return (
        <Flex style={{
            position: "relative",
            flex: priority,
            justifyContent: "center",
            alignItems: "center",
            minHeight:"20rem",
            width:"100%" 
        }}>
              
            <Box  position={"absolute"} style={{
                bottom: 0,
                height: "100%",
                minHeight:"fit-content"
            }}>
                {children}
            </Box>
        </Flex>
    );
};

