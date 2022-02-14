import { Badge, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
const MenuItem = ({ unableitem, handleAdd, item }) => {
  return (
    <Stack filter={unableitem(item.vegan) && 'grayscale(1)'} height='100%' bg='blackAlpha.600' p={1} borderRadius={4}>
      <Image src={item.image} borderRadius={4} />
      <Stack flex={1}>
        <Text>
          {item.title}
        </Text>
        <Stack flex={1} justifyContent='end' align='start' direction='column'>
          {item.vegan && <Badge borderRadius='full' px='2' colorScheme='green'> Vegan</Badge>}
          <Badge borderRadius='full' px='2' colorScheme='blue'>HealScore {item.healthScore}</Badge>
          <Badge borderRadius='full' px='2' colorScheme='orange'>Ready in {item.readyInMinutes}M</Badge>
        </Stack>
        <Stack color='green.300' direction='row' align='center' p={2} justifyContent='space-between'>
          <Text fontSize={30}>${Math.round(item.pricePerServing)}</Text>
          {!unableitem(item.vegan) &&
            <Icon onClick={() => { handleAdd(item) }} cursor='pointer' as={FaPlus} fontSize={30} />}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MenuItem
