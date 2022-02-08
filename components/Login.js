import { Box, Button, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const { handleChange, handleSubmit, user } = useContext(UserContext)
  useEffect(() => {
    user.token && router.push('/Home')
  }, [user])

  return (
    <Box h='100vh' width='max-content' color='white'>
      <Stack direction='row' alignItems='center' spacing={16}>
        <Stack h='100vh' justifyContent='space-evenly'>
          <Image src='./p1.jpg' alt='sampleimages' objectFit='cover' s='400px' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p3.jpg' alt='sampleimages' objectFit='cover' s='400px' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p2.jpg' alt='sampleimages' objectFit='cover' s='400px' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p4.jpg' alt='sampleimages' objectFit='cover' s='400px' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
        </Stack>
        <Stack spacing={10}>
          <Stack>
            <Text lineHeight='50px' fontSize='52px'>WELCOME TO <Text as='span' display='block' color='#D9B020'>OUR KITCHEN</Text></Text>
            <Box>
              <Text>CHECK OUT THE NEW MENU!</Text>
              <Text>NOW VEGAN FRINDLY!</Text>
            </Box>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Text>SIGN IN TO SEE OUR PLATES </Text>
              <Input
                _placeholder={{ color: '#C4C4C4' }}
                borderColor='whiteAlpha.800'
                type='text'
                placeholder='Name'
                name='name'
                onChange={handleChange}
                value={user.name || ''}
              />
              <Input
                _placeholder={{ color: '#C4C4C4' }}
                borderColor='whiteAlpha.800'
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={user.email || ''}
              />
              <InputGroup size='md'>
                <Input
                  _placeholder={{ color: '#C4C4C4' }}
                  borderColor='whiteAlpha.800'
                  pr='4.5rem'
                  name='password'
                  onChange={handleChange}
                  value={user.password || ''}
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button w='max-content' _hover={{ opacity: '.8' }} color='#6C5810' bgColor='#ECD78F' type='submit'>SUBMIT</Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Login
