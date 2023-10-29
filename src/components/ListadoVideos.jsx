import { useState } from 'react'
import { CardVideo } from './CardVideo'
import { Modal, Button } from 'react-bootstrap';

export const ListadoVideos = ({ videos, setVideos }) => {
    const [openModal, setOpenModal] = useState(false)
    const [idVideoSel, setIdVideoSel] = useState(0);

    const handleEliminarVideo = () => {
        setVideos(videos.filter(video => video.id != idVideoSel))
        setIdVideoSel(0)
        setOpenModal(false)
    }

    return (
        <div className="container-fluid mt-4">
            <h3 className="ps-2 fw-bold text-center text-lg-start">Lista de videos</h3>
            {
                videos.length ?
                    (
                        <div className="row m-0">
                            {videos.map(video => (
                                <CardVideo
                                    key={video.id}
                                    video={video}
                                    setOpenModal={setOpenModal}
                                    setIdVideoSel={setIdVideoSel} />
                            ))}
                        </div>
                    ) :
                    (
                        <p className="ps-2">No hay videos para mostrar.</p>
                    )
            }

            <Modal show={openModal} onHide={() => setOpenModal(false)} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>ELIMINAR VIDEO</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Desea eliminar el video?</Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setOpenModal(false)}>Cancelar</Button>
                    <Button 
                        variant="primary" 
                        onClick={handleEliminarVideo}>Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}