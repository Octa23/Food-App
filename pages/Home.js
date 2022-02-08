import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useContext, useEffect } from 'react'
import MenuList from '../components/MenuList'
import MenuSearcher from '../components/MenuSearcher'
import UserContext from '../context/UserContext'
import useMenu from '../hooks/useMenu'

const Home = () => {
  const { food, handleSubmit, handleChange, query } = useMenu()
  const router = useRouter()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    (!user) && (setUser({ token: window.localStorage.getItem('token'), name: window.localStorage.getItem('name') }));
    (!user) && router.push('/')
    console.log(user)
  }, [])

  return (
    <Box>
      <Text fontSize={40}>Welcome {user.name} </Text>
      <MenuSearcher handleChange={handleChange} query={query} handleSubmit={handleSubmit} />
      <MenuList food={food} />
    </Box>
  )
}

export default Home
