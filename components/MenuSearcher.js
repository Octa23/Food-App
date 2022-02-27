import { Box, Button, Input, Stack } from '@chakra-ui/react'

const MenuSearcher = ({ handleSubmit, handleChange, query }) => {
  return (
    <Box w='300px' alignSelf='center'>
      <form onSubmit={handleSubmit}>
        <Stack direction='row' align='center'>
          <Input fontSize='2xl' type='text' name='Foodname' _placeholder={{ color: 'blackAlpha.600', borderColor: 'blackAlpha.600' }} borderColor='blackAlpha.600' placeholder='Dish name' value={query} onChange={handleChange} />
          <Button p={6} fontSize='2xl' fontWeight='medium' type='submit'>Search</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default MenuSearcher
