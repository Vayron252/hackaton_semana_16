import React from 'react'
// import ImgPrueba from '../img/imgprueba.jpg'

export const CardVideo = ({video, setOpenModal, setIdVideoSel}) => {
    const handleSelectVideo = () => {
        setIdVideoSel(video.id)
        setOpenModal(true)
    }

    return (
        <div className="col-2 p-2">
            <div className="card">
                <div className="position-relative">
                    <div className="position-absolute top-0 start-0 mt-1 ms-1"><button className="btn btn-sm btn-secondary"><i className="fa-regular fa-pen-to-square"></i></button></div>
                    <div className="position-absolute top-0 end-0 mt-1 me-1">
                        <button 
                            className="btn btn-sm btn-secondary"
                            onClick={handleSelectVideo}
                        ><i className="fa-regular fa-trash-can"></i></button>
                    </div>
                    <img src={video.img} alt="imagen card" className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Técnicas de programación</h5>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis neque ratione molestias fuga nisi rem molestiae, ipsam facere magnam recusandae repudiandae, eos minima asperiores odio aperiam eum perferendis dolores?</p>
                    <button className="btn btn-success w-100">Ver Detalles</button>
                </div>
            </div>
        </div>
    )
}
