import React from 'react'

export default function Acardion() {
  return (

    <div className='acardions'>
      <h1 className='acardion-title'>Tarixiy obidalar va nodir topilmalar</h1>
      <div class="flex-container">

        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Toshqala</div>
        </div>

        <div className="flex-slide about">
          <div className="flex-title">Siniq saroy</div>
        </div>
        <div className="flex-slide work">
          <div className="flex-title">Oxak tepa</div>

        </div>
        <div className="flex-slide about">
          <div className="flex-title">Igna makon</div>
        </div>
        <div className="flex-slide contact">
          <div className="flex-title" style={{ paddingTop: 25 }}>Pichoq topti</div>
        </div>
        <div className="flex-slide about">
          <div className="flex-title">Qipchoq</div>
        </div>
        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Techik qala</div>
        </div>
      </div >
    </div>
  )
}
