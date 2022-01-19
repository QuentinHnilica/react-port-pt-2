import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Box,
    Button,
    Textarea,
    Text
  } from '@chakra-ui/react'

function Contact (){
    const [emailInput, setEmailInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleEmailChange = (e) => setEmailInput(e.target.value)
    const handleNameChange = (e) => setNameInput(e.target.value)
    const handleMessageChange = (e) => setMessageInput(e.target.value)

    const isEmailError = emailInput === ''
    const isNameError = nameInput === ''
    const isMessageError = messageInput === ''

    const isInvalid = isEmailError || isNameError || isMessageError

    function handleFormSubmit(){
        const messageCard = {
            email: emailInput,
            name: nameInput,
            message: messageInput
        }
        console.log(messageCard)
    }

    return (
        <Flex flexDirection="row" alignItems='center' justifyContent='center' margin='10%' >
            <Box minW='50%' border='solid' backgroundColor='lightgray'>
                <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                <Box>
                    <Text fontSize='23px'>Contact Me!</Text>
                </Box>
                <Box minW='80%'>
                    <FormControl isInvalid={isEmailError}>
                    <FormLabel htmlFor='email'>Email *</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        value={emailInput}
                        onChange={handleEmailChange}
                    />
                    {!isEmailError ? (
                        <FormHelperText>
                        Enter the email you'd like to receive a reply to.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    </FormControl>
                </Box>
                <Box minW='80%'>
                    <FormControl isInvalid={isNameError}>
                    <FormLabel htmlFor='email'>Name *</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        value={nameInput}
                        onChange={handleNameChange}
                    />
                    {!isNameError ? (
                        <FormHelperText>
                        Enter your name so I know how to address you.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Your name is required.</FormErrorMessage>
                    )}
                    </FormControl>
                </Box>
                <Box minW='80%'>
                    <FormControl isInvalid={isMessageError}>
                    <FormLabel htmlFor='email'>Message *</FormLabel>
                    <Textarea
                        id='message'
                        type='text'
                        value={messageInput}
                        onChange={handleMessageChange}
                    />
                    {!isMessageError ? (
                        <FormHelperText>
                        Let me know what's on your mind
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>A message is required</FormErrorMessage>
                    )}
                    </FormControl>
                </Box>
                <Button marginBottom='1%'
                backgroundColor='purple'
                color='white'
                onClick={handleFormSubmit}
                disabled={isInvalid}
                >Submit</Button>
                </Flex>
                
            </Box>
            
        </Flex>
    )
}

export default Contact