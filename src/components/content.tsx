import React, { useState } from "react"

import {getRandomInt} from '../services/utility'
import Being from "./being"
import IBeing from '../interfaces/beings'
import beings from './beings'
import contentStyles from './content.module.css'

export default function Content(props) {
  const [selectedBeing, setSelectedBeing] = useState(getRandomInt(2))
  return (
    <section className={contentStyles.container}>
      <h1>CONTENT</h1>
      <button onClick={() => setSelectedBeing(getRandomInt(2))}>Get a Being</button>
      <Being being={beings[selectedBeing]} />
    </section>
  )
}
