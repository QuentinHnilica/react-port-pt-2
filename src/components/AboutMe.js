import Html from '../Imgs/htmlCss.png'
import JsPic from '../Imgs/JavaScript.png'
import UnityPic from '../Imgs/Unity.png'
import RobloxPic from '../Imgs/RobloxStudio.jpeg'
import NodePic from '../Imgs/node.png'
import expressPic from '../Imgs/express.png'
import mysqlPic from '../Imgs/mysql.png'
import seqlaizePic from '../Imgs/Sequalize.png'
import Quig from '../Imgs/itsme.jpg'
import { Flex, Center, Heading, Box, Button, Link, Container, Text } from "@chakra-ui/react";

function AboutMe(){
    return(
        <>
        <Flex justifyContent='space-between' alignItems='center' backgroundColor='lightskyblue'>
            <Box maxW='80%' marginLeft='5'>
            <Text fontSize='24'> 
                Quentin Hnilica is a junior programmer. He got his start making video games in June of 2020. He excells in C# and LUA.
                Primarly using the Unity game engine, he is no stranger to others such as Game Maker Studio and Roblox Studio.
                His videogame Catalog currently includes: "GEORGE WASHINGTON: Cosmic Incarceration ~自由~", a game jam submission he was given
                48 hours to complete with just himself and two colleagues. He also released "Anbu Black Ops Anime Survival" which is a roblox 
                title, written entirely in LUA. Quentin has started his full stack journey in July of 2021 were he has learned HTML, CSS and JavaScript 
                he has created many tools using JavaScript which includes a browser text adventure game inspired by Dungeons And Dragons.
                </Text>
            </Box>
            
                <img src={Quig} width='300'></img>
            
        </Flex>

        <Flex justifyContent='center' backgroundColor='lightskyblue'>
            <Heading as='h2'>
                Tech I Use
            </Heading>
        </Flex>
        <Flex backgroundColor='lightskyblue'>
        <Container maxW='container.xl' centerContent>
            <Flex flexWrap='wrap'>
                <a href="https://www.w3schools.com/" target="_blank"><img src={Html} width='300'></img></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={JsPic} width="300"></img></a>
                <a href="https://unity.com/" target="_blank"><img src={UnityPic} width="300"></img></a>
                <a href="https://www.roblox.com/create" target="_blank"><img src={RobloxPic} width="300"></img></a>
                <a href="https://nodejs.org/en/" target="_blank"><img src={NodePic} width="300"></img></a>
                <a href="https://expressjs.com/" target="_blank"><img src={expressPic} width="300"></img></a>
                <a href="https://www.mysql.com/" target="_blank"><img src={mysqlPic} width="300"></img></a>
                <a href="https://sequelize.org/" target="_blank"><img src={seqlaizePic} width="300"></img></a>
            </Flex>
        </Container>
        </Flex>
        </>
        


        
        
    )
}

export default AboutMe