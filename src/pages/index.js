import React, { useState } from "react"
import Header from "../components/header"
import Being from "../components/being"


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var imaginaryBeings = [
  {'name': 'ugga bugga'},
  {'name': 'agga bagga'}
]

var selectedBeing = 0

export default function Home() {
  const [selectedBeing, setSelectedBeing] = useState(getRandomInt(2))
  return (
	  <div>
	  	<Header />
      <button onClick={() => setSelectedBeing(getRandomInt(2))}>Get a Being</button>
      <Being being={imaginaryBeings[selectedBeing]}/>
	  </div>
  )
}
