import {
    Flex,
    Box,
    Button,
    Link
  } from '@chakra-ui/react'
  import MyPDF from '../pdf/QuentinHnilica.pdf'

function Home (){
    return(
        <Flex justifyContent='center'>
            <Box marginTop='10%'>
            <a href={MyPDF}>
            <Button m='1'>View My Resume</Button>
            </a>
            <Link href="/react-port-pt-2/about">
            <Button m='1'>Learn More About Me</Button>
            </Link>
            <Link href="/react-port-pt-2/projects">
            <Button m='1'>View My Projects</Button>
            </Link>
            </Box>
        </Flex>
    )
}

export default Home