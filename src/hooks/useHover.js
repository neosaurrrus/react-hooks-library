import {useState, useMemo} from 'react'

export function useHover(){
    const [isHovered, setIsHovered] = useState(false)
    const bind = useMemo( () => {
      return {
        onMouseOver:    () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }},[])

    return [isHovered, bind]
}

