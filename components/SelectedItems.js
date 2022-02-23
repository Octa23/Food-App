import { Box, Icon, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaConciergeBell } from 'react-icons/fa'
import { MenuModal } from './MenuModal'

const sumatoria = (array, promedio = false) => {
  const total = array.reduce((a, b) => a + b, 0)
  return !promedio ? total : total / array.length
}

const SelectedItems = ({ items, handleRemove }) => {
  const rest = [].concat(items)

  const Prices = []
  const HealthScore = []
  const ReadyinMinutes = []

  items.forEach((e) => {
    Prices.push(e.pricePerServing)
    HealthScore.push(e.healthScore)
    ReadyinMinutes.push(e.readyInMinutes)
  })

  const FinalPrice = Math.round(sumatoria(Prices))
  const AverageHealthScore = sumatoria(HealthScore, true)
  const AverageReadyinMinutes = sumatoria(ReadyinMinutes, true)

  if (items.length < 4) {
    for (let i = 0; i < (4 - items.length); i++) {
      rest.push(null)
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack w='100%' spacing={10} direction='row' justifyContent='space-between' alignItems='center'>
      <Stack direction='row' spacing={4}>
        {rest && rest.map((e, index) => e
          ? <Box
              key={index}
              onClick={() => handleRemove(index, e.title, e.vegan)}
              bgImage={e.image}
              cursor='pointer'
              _hover={{ boxShadow: ' inset 0 0 10px 1px  red' }}
              bgSize='cover'
              bgPos='center'
              w='50px'
              h='50px'
              color={e.vegan ? 'green.500' : 'burlywood'}
              border='2px solid'
              borderRadius={10}
            />
          : <Box key={index} bg='blackAlpha.800' w='50px' h='50px' borderRadius={10} border='2px dashed' />
        )}
      </Stack>
      <Stack direction='row' align='center' spacing={5}>
        <Text fontSize={20} color='green.300'>${Math.round(FinalPrice)}</Text>
        <Icon
          onClick={items.length === 4 ? onOpen : null}
          as={FaConciergeBell}
          fontSize={40}
          cursor={items.length === 4 && 'pointer'}
          _hover={{ transform: items.length === 4 && 'scale(1.25)' }}
          opacity={items.length === 4 ? '1' : '.4'}
        />
      </Stack>
      <MenuModal isOpen={isOpen} Price={FinalPrice} ReadyinMinutes={AverageReadyinMinutes} HealthScore={AverageHealthScore} onClose={onClose} items={items} />
    </Stack>
  )
}

export default SelectedItems
