import { Box, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

const MenuList = ({ food }) => {
  useEffect(() => {
    console.log(food)
  }, [food])
  console.log(food)
  return (

    <Grid alignItems='center' justifyContent='center' templateColumns='repeat(auto-fit, 180px)' gap={2}>
      {!food
        ? null
        : food.results.map((e) =>
          <Stack height='100%' key={e.id} bg='blackAlpha.300' p={1} borderRadius={4}>
            <Image src={e.image} borderRadius={4} />
            <Box>
              <Text>
                {e.title}
              </Text>
            </Box>
          </Stack>
        )}

    </Grid>

  )
}

export default MenuList
