import {
    Flex,
    Box,
    Button,
  } from '@chakra-ui/react'
  import MyPDF from '../pdf/QuentinHnilica.pdf'

function Home (){
    return(
        <Flex justifyContent='center'>
            <Box marginTop='10%'>
            <a href={MyPDF}>
            <Button m='1'>View My Resume</Button>
            </a>
            <a href="/about">
            <Button m='1'>Learn More About Me</Button>
            </a>
            <a href="/projects">
            <Button m='1'>View My Projects</Button>
            </a>
            </Box>
        </Flex>
    )
}

export default Home