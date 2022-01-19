import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { Flex } from "@chakra-ui/react";
function Footer() {
    return(
        <footer>
        <Flex justifyContent='space-evenly' >
            <a href='https://twitter.com/QueueDevelop' target='_blank'>
            <BsTwitter fontSize='45px' />
            </a>
            <a href='https://github.com/QuentinHnilica' target='_blank'>
            <BsLinkedin fontSize='45px' />
            </a>
            <a href='https://www.linkedin.com/in/quentin-hnilica-3a9615217/' target='_blank'>
                <BsGithub fontSize='45px' />
            </a>
        </Flex>
        </footer>
    )
}

export default Footer