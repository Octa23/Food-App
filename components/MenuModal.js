import { Badge, Button, Divider, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const MenuModal = ({ isOpen, onClose, items, Price, ReadyinMinutes, HealthScore }) => {
  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={2}>
            {items.map((item) =>
              <Stack bg='whiteAlpha.300' borderRadius={4} p={1} justifyContent='space-between' key={item.id} direction='row'>
                <Image width='100px' borderRadius={4} src={item.image} />
                <Stack align='start' justifyContent='space-between' flex={1}>
                  <Text>{item.title}</Text>
                  {item.vegan && <Badge borderRadius='full' px='2' colorScheme='green'> Vegan</Badge>}
                </Stack>
                <Text alignSelf='flex-end' lineHeight={1} color='green.300' fontSize={30}>${Math.ceil(item.pricePerServing)}</Text>
              </Stack>
            )}
            <Divider />
            <Stack direction='row'>
              <Badge fontSize={16}>Ready in {ReadyinMinutes} minutes</Badge>
              <Badge fontSize={16}>HealScore = {HealthScore}</Badge>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Stack w='100%' direction='row-reverse' spacing={4}>
            <Text fontSize={30} color='green.400'>Total ${Price}</Text>
            <Button flex={1} colorScheme='green' onClick={onClose}>
              Ok
            </Button>
            <Button flex={1} colorScheme='red' onClick={onClose}>
              Close
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
