import { Box, Image, Spinner, Stack, Text } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { LoginForm } from './LoginForm'

const Login = () => {
  const router = useRouter()
  const { handleChange, handleSubmit, user, isLoading } = useContext(UserContext)
  useEffect(() => {
    user.token && router.push('/Home')
  }, [user])

  return (

    <Box>
      <Stack direction='row' alignItems='center' h='100vh' spacing={{ base: 0, lg: 10 }}>
        <Stack h='100vh' justifyContent='space-evenly' display={{ base: 'none', lg: 'flex' }}>
          <Image src='./p1.jpg' alt='sampleimages' objectFit='cover' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p3.jpg' alt='sampleimages' objectFit='cover' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p2.jpg' alt='sampleimages' objectFit='cover' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
          <Image src='./p4.jpg' alt='sampleimages' objectFit='cover' h='23%' borderRadius={10} boxShadow='0px 4px 25px 5px #000000' />
        </Stack>
        <Stack bg='blackAlpha.700' p={5} borderRadius={10} spacing={10}>
          <Stack>
            <Text lineHeight='50px' fontSize='52px'>WELCOME TO <Text as='span' display='block' color='#D9B020'>OUR KITCHEN</Text></Text>
            <Box>
              <Text>CHECK OUT THE NEW MENU!</Text>
              <Text>NOW VEGAN FRINDLY!</Text>
            </Box>
          </Stack>
          {!isLoading
            ? <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
            : <Spinner
                alignSelf='center'
                thickness='4px'
                color='#D9B020'
                size='xl'
              />}
        </Stack>
      </Stack>
    </Box>
  )
}
export default Login
