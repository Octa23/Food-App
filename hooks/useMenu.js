import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import UserContext from '../context/UserContext'

const useMenu = () => {
  const maxItems = 5
  const [query, setQuery] = useState('')
  const [food, setFood] = useState(null)
  const [randomFood, setRandomFood] = useState(null)
  const [selectedFood, setSelectedFood] = useState([])
  const [veganQ, setVeganQ] = useState(2)
  const [normalQ, setNormalQ] = useState(2)
  const toast = useToast()
  const { user } = useContext(UserContext)

  function apiCallsExceeded () {
    Swal.fire({
      title: 'Error!',
      text: 'So much request done today, try again tomorrow!',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }

  useEffect(() => {
    if (user) {
      axios.get(`https://api.spoonacular.com/recipes/random?apiKey=f465f1ea39f943b7b3782e0abac6b6aa&number=${maxItems}&tags=vegan`)
        .then(res => setRandomFood(res.data.recipes)).catch(e => apiCallsExceeded())
    }

    return null
  }, [])

  const handleAdd = (e) => {
    if (selectedFood.length < 4) {
      setSelectedFood(selectedFood.concat(e))
      e.vegan
        ? setVeganQ(veganQ - 1)
        : setNormalQ(normalQ - 1)
    }

    toast({
      title: 'Item added.',
      description: `You've added ${e.title} to the menu`,
      status: 'success',
      duration: 1000,
      containerStyle: {
        width: '80%'
      },
      isClosable: true
    })
  }

  const handleRemove = (index, title, vegan) => {
    const newitems = selectedFood.filter((e, i) => { return i !== index })
    setSelectedFood(newitems)
    vegan
      ? setVeganQ(veganQ + 1)
      : setNormalQ(normalQ + 1)
    toast({
      title: 'Item removed.',
      description: `You've removed ${title} to the menu`,
      status: 'error',
      duration: 3000,
      containerStyle: {
        width: '80%'
      },
      isClosable: true
    })
  }

  const handlePay = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Enjoy your meal and have a great night!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    setSelectedFood([])
  }

  const unableitem = (e) => {
    if (e && veganQ === 0) {
      return true
    } else {
      if (!e && !normalQ) {
        return true
      } else return false
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  // Busqueda de menu mediante query, en caso de no encontrar resultados disapara el error emergente de
  // no haber encontrado resultados con el texto ingresado. Encaso de exceso de llamadas a la Api se envia el error correspondiente
  const handleSubmit = async (e) => {
    e.preventDefault()
    query && axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${maxItems}&apiKey=f465f1ea39f943b7b3782e0abac6b6aa&maxReadyTime=20&addRecipeInformation=true`)
      .then(
        res => res.data.results.length !== 0
          ? setFood(res.data.results)
          : Swal.fire({
            title: 'Error!',
            text: 'We cant found any meal with that name,try again!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })).catch(e => apiCallsExceeded())
  }

  return {
    food,
    query,
    selectedFood,
    randomFood,
    handleAdd,
    unableitem,
    handleRemove,
    handleSubmit,
    handleChange,
    handlePay
  }
}

export default useMenu
