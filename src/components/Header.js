import { Flex, Center, Heading, Box, Button } from "@chakra-ui/react";
import { Link} from "react-router-dom";

function Header(){

   
  

    return(
        <>
            <Flex justifyContent='flex-end' backgroundColor='lightskyblue'>
            <Link to="/react-port-pt-2" as={Link}>
            <Button m='1' backgroundColor='purple' color='white'>
                
            Home
            </Button>
            </Link>
            <Link to="/react-port-pt-2/about" as={Link}>
            <Button  m="1" backgroundColor='purple' color='white'>
                About Me
            </Button>
            </Link>

            <Link to="/react-port-pt-2/projects" as={Link}>
            <Button  m="1" backgroundColor='purple' color='white'>
                Projects
            </Button>
            </Link>

            <Link to="/react-port-pt-2/contact" as={Link}>
                <Button m='1' backgroundColor='purple' color='white'>
                    Contact Me
                </Button>
            </Link>
            </Flex>
            <Center flex="1" backgroundColor='lightskyblue' color='white'>
                <Heading as='h1' fontSize='55px' color="black">The Quentin Hnilica</Heading>
            </Center>

        </>
    )
}

export default Header