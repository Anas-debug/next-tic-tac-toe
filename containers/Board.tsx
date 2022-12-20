import React, { useState } from 'react'

type Props = {}

const Board = (props: Props) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
        Math.round(Math.random()) === 1 ? 'X' : 'O'
    );
  return (
    <div><p>Hey {currentPlayer} it&apos;s your turn</p></div>
  )
}

export default Board