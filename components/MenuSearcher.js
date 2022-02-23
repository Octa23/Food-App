import { Box, Button, Input, Stack } from '@chakra-ui/react'

const MenuSearcher = ({ handleSubmit, handleChange, query }) => {
  return (
    <Box w='300px' alignSelf='center'>
      <form onSubmit={handleSubmit}>
        <Stack direction='row'>
          <Input type='text' name='Foodname' placeholder='Dish name' value={query} onChange={handleChange} />
          <Button type='submit'>Search</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default MenuSearcher
