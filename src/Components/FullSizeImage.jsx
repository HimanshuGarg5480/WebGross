import React from 'react'

function FullSizeImage({selectedImg}) {
  return (
    <div className='p-4'>
        <img src={selectedImg} width="300" alt="" />
    </div>
  )
}

export default FullSizeImage