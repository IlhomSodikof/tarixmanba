import React from 'react'

export default function Acardion() {
  return (

    <div className='acardions'>
      <h1 className='acardion-title'>World History Encyclopedia</h1>
      <div class="flex-container">

        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Home</div>
        </div>

        <div className="flex-slide about">
          <div className="flex-title">About</div>
        </div>
        <div className="flex-slide work">
          <div className="flex-title">Work</div>

        </div>
        <div className="flex-slide about">
          <div className="flex-title">About</div>
        </div>
        <div className="flex-slide contact">
          <div className="flex-title" style={{ paddingTop: 25 }}>Contact</div>
        </div>
        <div className="flex-slide about">
          <div className="flex-title">About</div>
        </div>
        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Home</div>
        </div>
      </div >
    </div>
  )
}
