import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import ph1 from '/PH1.jpg';
import ph2 from '/PH2.jpg';
import ph3 from '/PH3.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const images = [
    ph1,
    ph2,
    ph3,
];



export const Carrosel = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [index, setIndex] = useState(0);


    const changeManually = (oper: number) => index < images.length ? setIndex((index + oper) % images.length) : setIndex(0);

    useEffect(() => {
        const changePic = () => {
            const nextIndex = (index + 1) % images.length;
            setIndex(nextIndex);
            setCurrentImage(images[nextIndex]);
        };

        const timer = setTimeout(changePic, 3500);
        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
        
        setCurrentImage(images[index]);
    }, [index])
    return (
        <Flex height={"100%"} justify="center" align="center">
            <Box position={"absolute"} height={"100%"} left={"0"}>
                <IconButton w={"40px"} bg={"rgba(0,0,0,0.3)"} height={"100%"} onClick={() => changeManually(-1)}></IconButton>
            </Box>
            <Box position={"absolute"} height={"100%"} right={"0"}>
                <IconButton w={"40px"} bg={"rgba(0,0,0,0.3)"}height={"100%"} onClick={() => changeManually(1)}>
                    <FiArrowRight width={"100px"}></FiArrowRight>
                </IconButton>
            </Box>

            <Image style={{
                height:"100%"
            }} src={currentImage} />


        </Flex>
    );
};
