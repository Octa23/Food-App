
import MenuItem from './MenuItem'
import { chakra, Stack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import SliderButton from './SliderButton'
import { useEffect, useRef } from 'react'

const ChakraSwiper = chakra(Swiper)

const MenuList = ({ food, handleAdd, unableitem }) => {
  const swiperRef = useRef(null)
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [food])

  return (

    <ChakraSwiper
      maxW='100%'
      slidesPerView={2}
      spaceBetween={10}
      slidesPerGroup={2}
      style={{
        '--swiper-navigation-color': '#fff'
      }}
      breakpoints={{
        600: {
          slidesPerView: 3,
          slidesPerGroup: 3

        },
        900: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
        1470: {
          slidesPerView: 5,
          slidesPerGroup: 5
        }
      }}
      className='mySwiper'
    >
      {food &&
        food.map((item) =>
          <SwiperSlide key={item.id}>
            <MenuItem handleAdd={handleAdd} item={item} unableitem={unableitem} />
          </SwiperSlide>
        )}
      <Stack ref={swiperRef} py={5} direction='row' w='100%' justifyContent='center' spacing={10}>
        <SliderButton action='prev' />
        <SliderButton />
      </Stack>
    </ChakraSwiper>

  )
}

export default MenuList
