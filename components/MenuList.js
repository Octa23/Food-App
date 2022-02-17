
import MenuItem from './MenuItem'
import { chakra, Stack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import SliderButton from './SliderButton'

const ChakraSwiper = chakra(Swiper)

const MenuList = ({ food, handleAdd, unableitem }) => {
  return (

    <ChakraSwiper
      maxW='800px'
      slidesPerView={2}
      spaceBetween={20}
      slidesPerGroup={2}
      loop
      style={{
        '--swiper-navigation-color': '#fff'
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3
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
      <Stack py={5} direction='row' w='100%' justifyContent='center' spacing={10}>
        <SliderButton action='prev' />
        <SliderButton />
      </Stack>
    </ChakraSwiper>

  )
}

export default MenuList
