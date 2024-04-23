// MyContext.jsx
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

const MyContextProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([])
  const [favoriteImages, setFavoriteImages] = useState([])

  const apiIma = async () => {
    try {
      const PHOTO_URL = await fetch('https://aves.ninjas.cl/api/birds')
      const res = await PHOTO_URL.json()
      const newArray = Object.values(res).map((imagen) => ({ ...imagen, like: false }))
      setImagenes(newArray)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  useEffect(() => {
    apiIma()
  }, [])

  // Function to add or remove image from favorites
  const toggleFavorite = (uid) => {
    const updatedImages = imagenes.map((img) => {
      if (img.uid === uid) {
        return { ...img, like: !img.like }
      }
      return img
    })
    setImagenes(updatedImages)

    const selectedImage = imagenes.find((img) => img.uid === uid)
    if (selectedImage.like) {
      setFavoriteImages((prev) => [...prev, selectedImage])
    } else {
      setFavoriteImages((prev) => prev.filter((img) => img.uid !== uid))
    }
  }

  const globalState = {
    imagenes,
    setImagenes,
    favoriteImages,
    toggleFavorite
  }

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>
}

export default MyContextProvider
