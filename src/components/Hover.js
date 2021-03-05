
import React from 'react'
import {useHover} from '../hooks'
import { Card } from '../Elements'
import black from '../black.png'

export default function Mount(){

  const [isHovered, bind] = useHover();
  console.log(isHovered)


  return (
    <div>
      <Card {...bind} style={{background: isHovered ? "var(--black)" : "var(--purp"}}>
        <h3>Lukies hover card</h3>
        <img alt="" src={black} />
      </Card>

    </div>
  )

}

