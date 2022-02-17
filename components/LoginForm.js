import { Button, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export const LoginForm = ({ handleSubmit, handleChange, user }) => {
  const [show, setShow] = useState(false)
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Text>SIGN IN TO SEE OUR PLATES </Text>
        <Input
          _placeholder={{ color: '#C4C4C4' }}
          borderColor='whiteAlpha.800'
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleChange}
          value={user.name || ''}
        />
        <Input
          _placeholder={{ color: '#C4C4C4' }}
          borderColor='whiteAlpha.800'
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={user.email || ''}
        />
        <InputGroup size='md'>
          <Input
            _placeholder={{ color: '#C4C4C4' }}
            borderColor='whiteAlpha.800'
            pr='4.5rem'
            name='password'
            onChange={handleChange}
            value={user.password || ''}
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button w='max-content' _hover={{ opacity: '.8' }} color='#6C5810' bgColor='#ECD78F' type='submit'>SUBMIT</Button>
      </Stack>
    </form>
  )
}
