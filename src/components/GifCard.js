import React from 'react'

export const GifCard = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
