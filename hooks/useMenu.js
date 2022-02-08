import axios from 'axios'
import { useEffect, useState } from 'react'

const useMenu = () => {
  const maxItems = 20
  const [query, setQuery] = useState('')
  const [food, setFood] = useState(null)

  useEffect(() => {
    console.log(food, 'aca')
  }, [food])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      query && axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${maxItems}&apiKey=f465f1ea39f943b7b3782e0abac6b6aa&maxReadyTime=20`)
        .then(res => setFood(res.data)).then(console.log(food))
    } catch (error) { console.log(error) }
    // await query && axios.get(`https://lit-reaches-60730.herokuapp.com/api/posts/${query}`).then(res => setFood(res.data.message))
  }

  return { food, handleSubmit, handleChange, query }
}

export default useMenu
