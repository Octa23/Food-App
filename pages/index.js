import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Login from '../components/Login'

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack as='main' alignItems={{ base: 'center', lg: 'start' }} w='100%' px={{ base: 2, lg: 10 }} bgImage='/bg.jpg' bgSize='cover' bgPos='center' h='100vh'>
        <Login />
      </Stack>
    </>
  )
}
