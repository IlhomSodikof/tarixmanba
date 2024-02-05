import React from 'react'
import MiniCard from '../components/MiniCard'

export default function Shtamp() {
  return (
    <>
      <div className='shtamp-container'>
        <div className='title-shtamp'>
          <h2 >Muhirlar<span>BARCHASI</span></h2>
        </div>
        <div className="title-shtamp-card">
          {[1, 2, 3, 4,].map((item) =>
            <MiniCard />
          )}
        </div>
      </div >
    </>
  )
}
