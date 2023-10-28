import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { ListadoVideos } from './components/ListadoVideos'
import { obtenerMascotas } from './data/utils'

export const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const videosInicial = obtenerMascotas();
    setVideos(videosInicial);
  }, [])
  
  return (
    <>
      <Header />
      <ListadoVideos
        videos={videos}
        setVideos={setVideos} />
    </>
  )
}
