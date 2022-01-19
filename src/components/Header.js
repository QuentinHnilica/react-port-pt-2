import { Flex, Center, Heading, Box, Button, Link } from "@chakra-ui/react";
import { Route } from "react-router-dom";


function Header(){

   
  

    return(
        <>
            <Flex justifyContent='flex-end' backgroundColor='lightskyblue'>
            <a href="/">
            <Button m='1' backgroundColor='purple' color='white'>
                
            Home
            </Button>
            </a>
            <a href="/about">
            <Button  m="1" backgroundColor='purple' color='white'>
                About Me
            </Button>
            </a>

            <a href="/projects">
            <Button  m="1" backgroundColor='purple' color='white'>
                Projects
            </Button>
            </a>

            <a href="/contact">
                <Button m='1' backgroundColor='purple' color='white'>
                    Contact Me
                </Button>
            </a>
            </Flex>
            <Center flex="1" backgroundColor='lightskyblue' color='white'>
                <Heading as='h1' fontSize='55px' color="black">The Quentin Hnilica</Heading>
            </Center>

        </>
    )
}

export default Header