import { Box, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import MenuList from '../components/MenuList'
import MenuSearcher from '../components/MenuSearcher'
import SelectedItems from '../components/SelectedItems'
import UserContext from '../context/UserContext'
import useMenu from '../hooks/useMenu'

const Home = () => {
  const {
    food,
    selectedFood,
    handleRemove,
    handleAdd,
    randomFood,
    unableitem,
    handleSubmit,
    handleChange,
    query,
    handlePay
  } = useMenu()

  const router = useRouter()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    (!user) && (setUser({ token: window.localStorage.getItem('token'), name: window.localStorage.getItem('name') }));
    (!user) && router.push('/')
  }, [])

  return (
    <Box backgroundColor='#93a5ce' backgroundImage='linear-gradient(10deg, #93a5ce 0%, #14557b 74%)'>
      <Stack
        px={{ base: 2, lg: 10 }}
        py={4}
        backdropFilter='saturate(180%) blur(5px)'
        backgroundColor='rgba(0,0, 0, 0.4)'
        pos='fixed'
        justifyContent='space-between'
        alignItems={{ base: 'normal', md: 'center' }}
        w='100%'
        zIndex={10}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <SelectedItems items={selectedFood} handleRemove={handleRemove} handlePay={handlePay} />
      </Stack>
      <Stack bgPosition='right' textAlign={{ base: 'center', md: 'left' }} clipPath='ellipse(100% 55% at 50% 45%)' bgSize='cover' bgImage="linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .9) 100%),url('./bg2.jpg')" h={{ base: '100vh', md: '100vh' }} px={{ base: 5, md: 32 }} py={10} justifyContent={{ base: 'end', md: 'center' }}>
        <Stack w={{ base: '100%', lg: '40%' }} spacing={6}>
          <Text fontSize={40}>Hello {user.name}!</Text>
          <Text fontSize={30}>Did you know that you can choose between more than 500 dishes?</Text>
          <Text fontSize={30}>The widest variety of meals in one place and at the best price!</Text>
        </Stack>
      </Stack>
      <Stack px={{ base: 2, xl: 200 }} py={30} spacing={20}>
        {randomFood &&
          <Stack spacing={10}>
            <Text textAlign='center' fontSize='2xl'>Recomended Vegan Dishes </Text>
            <MenuList food={randomFood} handleAdd={handleAdd} unableitem={unableitem} />
          </Stack>}

        <Stack spacing={10}>
          <Stack>
            <Text textAlign='center' fontSize='2xl'>Search your favorite meal in our menu</Text>
            <MenuSearcher handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
          </Stack>
          {food &&
            <MenuList food={food} handleAdd={handleAdd} unableitem={unableitem} />}
        </Stack>
      </Stack>

    </Box>
  )
}

export default Home
