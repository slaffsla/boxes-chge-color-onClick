import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for (let i=0; i<=prevSquares.length-1; i++) {
                if (id===prevSquares[i].id) {
                    let newSquare = prevSquares[i]
                    newSquare.on = !prevSquares[i].on
                newSquares.push(newSquare)
                      
                } else {
                    newSquares.push(prevSquares[i])
                }
            }
            return newSquares
        })
    }
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
