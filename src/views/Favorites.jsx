import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Gallery from '../components/Gallery'

const Favorites = () => {
  const { imagenes } = useContext(MyContext)
  return (
    <div className='App'>
      <h1>Fotos favoritas</h1>
      <Gallery imagenes={imagenes} agregamosLosFavoritos={true} />
    </div>
  )
}

export default Favorites

/*
<div className='App'>
      <h1>Fotos favoritas</h1>
      {favoriteImages.map((imagen) => (
        <div key={imagen.uid} className=' card gallery grid-columns-2 p-2 grid-container' style={{ width: '33.33%' }}>
          <img
            src={imagen.images.main}
            className='card-img-top'
            alt='imagen de ave'
          />
       // </div>
      // ))}
   // </div> */
