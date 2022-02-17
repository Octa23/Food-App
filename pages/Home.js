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
    query
  } = useMenu()

  const router = useRouter()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    (!user) && (setUser({ token: window.localStorage.getItem('token'), name: window.localStorage.getItem('name') }));
    (!user) && router.push('/')
  }, [])

  return (
    <Box pb={50} bgSize='contain' bgImage='./bg2.jpg'>
      <Stack
        px={{ base: 2, lg: 10 }}
        p={4}
        backdropFilter='saturate(180%) blur(5px)'
        backgroundColor='rgba(0,0, 0, 0.4)'
        pos='fixed'
        justifyContent='space-between'
        alignItems={{ base: 'normal', md: 'center' }}
        w='100%'
        zIndex={10}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <SelectedItems items={selectedFood} handleRemove={handleRemove} />
        <MenuSearcher handleChange={handleChange} query={query} handleSubmit={handleSubmit} />
      </Stack>
      <Box px={{ base: 2, lg: 10 }}>
        <Stack pt={{ base: '180px', md: '130px' }}>
          <Text fontSize='2xl'>Recomended Vegan Dishes </Text>
          <MenuList food={randomFood} handleAdd={handleAdd} unableitem={unableitem} />
        </Stack>
        {food &&
          <Stack pt='50px'>
            <Text fontSize='2xl'>Searched Dishes</Text>
            <MenuList food={food} handleAdd={handleAdd} unableitem={unableitem} />
          </Stack>}
      </Box>
    </Box>
  )
}

export default Home
