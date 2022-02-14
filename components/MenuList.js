import { Grid } from '@chakra-ui/react'
import MenuItem from './MenuItem'

const MenuList = ({ food, handleAdd, unableitem }) => {
  return (
    <Grid alignItems='center' justifyContent={{ base: 'center', lg: 'flex-start' }} templateColumns='repeat(auto-fill,minmax(180px, 1fr))' gap={5}>
      {food &&
        food.map((item) =>
          <MenuItem key={item.id} handleAdd={handleAdd} item={item} unableitem={unableitem} />
        )}
    </Grid>
  )
}

export default MenuList
