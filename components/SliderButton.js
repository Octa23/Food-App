import { Button } from '@chakra-ui/react'
import { React } from 'react'
import { useSwiper } from 'swiper/react'

export default function SliderButton ({ action }) {
  const swiper = useSwiper()

  return (
    <Button fontSize='2xl' cursor='pointer' bg='blackAlpha.600' onClick={() => action === 'prev' ? swiper.slidePrev() : swiper.slideNext()}>{action === 'prev' ? '<' : '>'}</Button>
  )
}
