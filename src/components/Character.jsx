import React from 'react'


export default function Character({character}) {
  return (
    <div>
            <h3>{character.name}</h3>
            <img src={character.image} />
    </div>
  )
}