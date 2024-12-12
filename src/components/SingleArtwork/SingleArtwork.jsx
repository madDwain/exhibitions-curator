import React from 'react'
import './SingleArtwork.css'

const SingleArtwork = ({ artwork }) => {
  return (
    <div className='single-artwork-card'>
      <>{artwork.department}</>
      <img src={`artwork.images[0].baseimageurl`} alt="deez"></img>
    </div>
  )
}

export default SingleArtwork
