import React, { useEffect } from 'react'
import Icon from '../assets/cat.png'
const FollowCursor = ({offset}) => {
    const [cursor_position, setCursorPosition] = React.useState({x: 0, y: 0})
    const updateCursorPosition = (e) => {
        setCursorPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', updateCursorPosition)
        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
        }
    }
    , [])


  return (
 
    <img  src={Icon} alt="cat" style={
        {
            position: 'absolute',
            top: cursor_position.y + offset,
            left: cursor_position.x + offset,
            width: '50px',
            height: '50px',
            zIndex: 1000,
            overflow: 'hidden'


        }
    }/>
    

  )
}

export default FollowCursor