import { Image, Flex, Text, Button, Box} from "@chakra-ui/react";
import WeatherDashPic from '../Imgs/weather-dashboard.png'
import DnDPic from '../Imgs/DND.png'
import GroupFinderPic from '../Imgs/group-finder.png'
import NoteTakerPic from '../Imgs/note-taker.png'
import WorkDayPic from '../Imgs/Work-Day-Scheduler.png'
import PasswordGenPic from '../Imgs/PasswordGen.png'

function Projects(){
    return(
        <>
        <Flex flexDirection="row" alignItems='center' justifyContent='center' backgroundColor='lightskyblue'>
            <Box border='solid' backgroundColor='gray' margin='1%'>
                <Flex flexDirection="column" alignItems="center"> 
                    <Image
                    boxSize="300px"
                    objectFit="cover"
                    src={WeatherDashPic}
                    alt="Dan Abramov"
                    />
                    <Text>My Weather Dashboard</Text>
                    <Flex justifyContent='space-around'>
                        <a href="https://github.com/QuentinHnilica/weather-dashboard" target='_blank'>
                            <Button backgroundColor='green' color='white'>GitHub</Button>
                        </a>
                        <a href="https://quentinhnilica.github.io/weather-dashboard/" target='_blank'>
                            <Button backgroundColor='green' color='white'>Deployment</Button>
                        </a>
                    </Flex>
                </Flex>
            </Box>


            <Box border='solid' backgroundColor='gray'>
                <Flex flexDirection="column" alignItems="center"> 
                    <Image
                    boxSize="300px"
                    objectFit="cover"
                    src={DnDPic}
                    alt="Dan Abramov"
                    />
                    <Text>DND Text Adventure</Text>
                    <Flex justifyContent='space-around'>
                        <a href="https://github.com/QuentinHnilica/dnd-5e-the-adventure" target='_blank'>
                            <Button backgroundColor='green' color='white'>GitHub</Button>
                        </a>
                        <a href="https://quentinhnilica.github.io/dnd-5e-the-adventure/" target='_blank'>
                            <Button backgroundColor='green' color='white'>Deployment</Button>
                        </a>
                    </Flex>
                </Flex>
            </Box>


            <Box border='solid' backgroundColor='gray' margin='1%'>
                <Flex flexDirection="column" alignItems="center"> 
                    <Image
                    boxSize="300px"
                    objectFit="cover"
                    src={GroupFinderPic}
                    alt="Dan Abramov"
                    />
                    <Text>Web Dev Group Finder</Text>
                    <Flex justifyContent='space-around'>
                        <a href="https://github.com/QuentinHnilica/web-dev-group-finder" target='_blank'>
                            <Button backgroundColor='green' color='white'>GitHub</Button>
                        </a>
                        <a href="https://web-dev-group-finder.herokuapp.com/" target='_blank'>
                            <Button backgroundColor='green' color='white'>Deployment</Button>
                        </a>
                    </Flex>
                </Flex>
            </Box>
        </Flex>



        <Flex flexDirection="row" alignItems='center' justifyContent='center' backgroundColor='lightskyblue'>
        <Box border='solid' backgroundColor='gray' margin='1%'>
            <Flex flexDirection="column" alignItems="center"> 
                <Image
                boxSize="300px"
                objectFit="cover"
                src={NoteTakerPic}
                alt="Dan Abramov"
                />
                <Text>Note Taker App</Text>
                <Flex justifyContent='space-around'>
                    <a href="https://github.com/QuentinHnilica/note-taker" target='_blank'>
                        <Button backgroundColor='green' color='white'>GitHub</Button>
                    </a>
                    <a href="https://note-taker-qh.herokuapp.com/" target='_blank'>
                        <Button backgroundColor='green' color='white'>Deployment</Button>
                    </a>
                </Flex>
            </Flex>
        </Box>


        <Box border='solid' backgroundColor='gray'>
            <Flex flexDirection="column" alignItems="center"> 
                <Image
                boxSize="300px"
                objectFit="cover"
                src={WorkDayPic}
                alt="Dan Abramov"
                />
                <Text>Scheduler App</Text>
                <Flex justifyContent='space-around'>
                    <a href="https://github.com/QuentinHnilica/work-day-scheduler" target='_blank'>
                        <Button backgroundColor='green' color='white'>GitHub</Button>
                    </a>
                    <a href="https://quentinhnilica.github.io/work-day-scheduler/" target='_blank'>
                        <Button backgroundColor='green' color='white'>Deployment</Button>
                    </a>
                </Flex>
            </Flex>
        </Box>


        <Box border='solid' backgroundColor='gray' margin='1%'>
            <Flex flexDirection="column" alignItems="center"> 
                <Image
                boxSize="300px"
                objectFit="cover"
                src={PasswordGenPic}
                alt="Dan Abramov"
                />
                <Text>Password Generator App</Text>
                <Flex justifyContent='space-around'>
                    <a href="https://github.com/QuentinHnilica/password-generator" target='_blank'>
                        <Button backgroundColor='green' color='white'>GitHub</Button>
                    </a>
                    <a href="https://quentinhnilica.github.io/password-generator/" target='_blank'>
                        <Button backgroundColor='green' color='white'>Deployment</Button>
                    </a>
                </Flex>
            </Flex>
        </Box>
    </Flex>
    </>
    )
}

export default Projects