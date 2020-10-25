import React from "react"

import IBeing from '../interfaces/beings'
import beingStyle from './being.module.css'

export default function Being(props) {
  return (
    <div className={beingStyle.container}>
      <article>
        <h1>{ props.being.name }</h1>
        <h2>Origin: { props.being.origin }</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </article>
      <div className={beingStyle.beingImage}>
        <img src={ props.being.image } />
      </div>
    </div>
  )
}
