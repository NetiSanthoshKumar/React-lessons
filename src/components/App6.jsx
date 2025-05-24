import React from 'react'
import Fruit from './Fruit'

export default function App6() {
  return (
    <div>
        
        <h1>This is App6 Component</h1>
        <div className="Box">
      <div className="BOX-container">
        <Fruit name="Apple" />
        <Fruit name="Mango" />
        <Fruit name="Orange" />
        <Fruit name="Banana" />
      </div>
    </div>
    </div>
  )
}