import { Button, Input } from '@chakra-ui/react'

const MenuSearcher = ({ handleSubmit, handleChange, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' name='Foodname' value={query} onChange={handleChange} />
      <Button type='submit'>Buscar</Button>
    </form>
  )
}

export default MenuSearcher
